'use strict'
const fs = require("fs");
const { createOriginAccessIdentity } = require('./createOriginAccessIdentity');

const createS3Bucket = async (bucketName, region, sls, provider) => {
  let createParams = {
    Bucket: bucketName
  };
  if (region != "us-east-1") {
    createParams["CreateBucketConfiguration"] = { LocationConstraint: region };
  }
  try {
    await provider.request('S3', 'createBucket', createParams);
    console.log(`Bucket ${bucketName} created`);
    console.log();
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case "BucketAlreadyExists":
        msg = "Bucket already exists, please choose a different bucket name"
      case 'AccessDenied':
        msg = "S3 Access Denied, please check IAM Role and permissions"
      case 'InvalidBucketName':
        msg = "Bucket Name Is Invalid, please use a different bucket name"
      case 'SignatureDoesNotMatch':
        msg = "Error with AWS Credentials, please check IAM Access and Secret keys"
      default:
        msg = "Error Creating Bucket"
        sls.cli.log(JSON.stringify(e, null, 2));
    }
    throw new Error(msg);
  }
};

const setBucketPolicy = async (bucketName, originAccessID, sls, provider) => {
  let { S3CanonicalUserId }= originAccessID;
  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        "Sid":" Grant a CloudFront Origin Identity access to support private content",
        "Effect":"Allow",
        "Principal":{"CanonicalUser": `${S3CanonicalUserId}`},
        "Action":"s3:GetObject",
        "Resource":`arn:aws:s3:::${bucketName}/*`
      }
    ]
  };
  const policyParams = {
    Bucket: bucketName,
    Policy: JSON.stringify(policy)
  };
  try {
  await provider.request('S3', 'putBucketPolicy', policyParams);
  console.log(`${bucketName} policy set for Cloudfront Origin Identity`);
  console.log();
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case 'AccessDenied':
        msg = "S3 Access Denied, please check IAM Role and permissions"
      case "InvalidPolicyDocument":
        msg = "Policy document is invalid, please check bucket name"
      case 'NoSuchBucket':
        msg = "Bucket not found, please check bucket name"
      default:
        console.log(e);
        msg = "Error Putting Bucket Policy"
    }
    throw new Error(msg);
  }
}

const uploadItemsToS3 = async (bucketName, items, entryPath, sls, provider) => {
  await Promise.all(
    items.map(async item => {
      let body = fs.readFileSync(item);
      let relItemPath = item.substring(entryPath.length + 1, item.length);
      let putParams = {
        Bucket: bucketName,
        Key: relItemPath,
        Body: body
      };
      putParams["ContentType"] = getContentType(item);
      putParams["ContentDisposition"] = `inline; filename=${relItemPath}`;
      try {
        await provider.request('S3', 'putObject', putParams);
      } catch (e) {
        let msg = "";
        switch (e.code) {
          case 'AccessDenied':
            msg = "S3 Access Denied, please check IAM Role and permissions"
          case "EntityTooLarge":
            msg = `Item ${relItemPath} too large`
          case 'NoSuchBucket':
            msg = "Bucket not found, please check bucket name"
          case 'SignatureDoesNotMatch':
            msg = "Error with AWS Credentials, please check IAM Access and Secret keys"
          default:
            msg = "Error Creating Bucket"
        }
        throw new Error(msg);
      }
    })
  );
};

const getContentType = item => {
  const splitFile = item.split(".");
  const fileEnding = splitFile[splitFile.length - 1];
  switch (fileEnding) {
    case "html":
      return "text/html";
    case "js":
      return "application/javascript";
    case "svg":
      return "image/svg+xml";
    case "css":
      return "text/css";
    default:
      return "binary/octet-stream";
  }
};

const checkForS3Bucket = async (bucketName, sls, provider) => {
  const params = {
    Bucket: bucketName
  };
  try {
    await provider.request('S3', 'headBucket', params);
    return true;
  } catch (error) {
    if (error.statusCode === 404) {
      return false;
    }
    throw error;
  }
};

const deleteExistingObjects = async (bucketName, objectsList, sls, provider) => {
  const params = {
    Bucket: bucketName,
    Delete: {
      Objects: objectsList
    }
  };
  try {
    console.log('Deleting Objects');
    await provider.request('S3', 'deleteObjects', params);
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case 'AccessDenied':
        msg = "S3 Access Denied, please check IAM Role and permissions"
      case "NoSuchKey":
        msg = `No Such Key Found`
      case 'NoSuchBucket':
        msg = "Bucket not found, please check bucket name"
      case 'SignatureDoesNotMatch':
        msg = "Error with AWS Credentials, please check IAM Access and Secret keys"
      default:
        msg = "Error Creating Bucket"
    }
    throw new Error(msg);
  }
}

const getListOfObjects = async (bucketName, sls, provider) => {
  const params = {
    Bucket: bucketName
  };
  let objectsList = [];
  try {
    let response = await provider.request('S3', 'listObjectsV2', params);
    if (response.hasOwnProperty("Contents") && response.Contents.length > 0) {
      response.Contents.forEach(object => objectsList.push({ Key: object.Key }));
    }
    let objectValuesList = [];
    for (let index in objectsList) {
      if (objectsList[index]["Key"] !== `cloudfrontDistro/${bucketName}-CFDistro.json`) {
        objectValuesList.push(objectsList[index]);
      }
    }
    return objectValuesList;
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case 'AccessDenied':
        msg = "S3 Access Denied, please check IAM Role and permissions"
      case "NoSuchKey":
        msg = `No Such Key Found`
      case 'NoSuchBucket':
        msg = "Bucket not found, please check bucket name"
      case 'SignatureDoesNotMatch':
        msg = "Error with AWS Credentials, please check IAM Access and Secret keys"
      default:
        console.log(e);
        msg = "Error Creating Bucket"
    }
    throw new Error(msg);
  }
}

const handleExistingBucket = async (bucketName, sls, provider) => {
  console.log(`Cleaning bucket ${bucketName}`);
  console.log();
  let objectsList = await getListOfObjects(bucketName, sls, provider);
  if (objectsList.length > 0) {
    await handleObjectDeletion(bucketName, objectsList, sls, provider);
  }
};

const handleObjectDeletion = async (bucketName, objectsList, sls, provider) => {
  while (objectsList.length === 1000) {
    await deleteExistingObjects(bucketName, objectsList, sls, provider);
    objectsList = await getListOfObjects(bucketName, sls);
  }
  await deleteExistingObjects(bucketName, objectsList, sls, provider);
};

const handleCreatingBucket = async (bucketName, region, sls, provider) => {
  await createS3Bucket(bucketName, region, sls, provider);
  let originAccessID = await createOriginAccessIdentity(sls, provider);
  await setBucketPolicy(bucketName, originAccessID, sls, provider);
  return originAccessID;
};

module.exports = {
  getContentType,
  uploadItemsToS3,
  checkForS3Bucket,
  handleExistingBucket,
  handleCreatingBucket,
  setBucketPolicy
};
