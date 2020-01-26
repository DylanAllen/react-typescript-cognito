const fs = require("fs");
const { setBucketPolicy } = require("./s3Utils");
const { getParams } = require("./cloudFrontConfig");
const { createOriginAccessIdentity } = require('./createOriginAccessIdentity');

const createDistribution = async (bucketName, originAccessID, websiteEntry, sls, provider) => {
  if (originAccessID === null) {
    originAccessID = await createOriginAccessIdentity(sls, provider);
    await setBucketPolicy(bucketName, originAccessID, sls, provider);
  }
  const params = getParams(bucketName, originAccessID, websiteEntry, sls);
  let response;
  try {
    response = await provider.request('CloudFront', 'createDistribution', params);
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case 'InvalidOrigin':
        msg = "CloudFront Origin Access Identity Already Exists"
      case 'InvalidOriginAccessIdentity':
        msg = "Too Many CloudFront Origin Access Identities"
      case 'DistributionAlreadyExists':
        msg = "Distribution Already Exists"
      case 'TooManyDistributions':
        msg = "Too Many Distributions"
      case 'NoSuchOrigin':
        msg = "No Such Origin"
      default:
      sls.cli.log(JSON.stringify(e, null, 2));
        msg = "Error Creating Origin Access Identity"
    }
    throw new Error(msg);
  }
  const putParams = {
    Bucket: bucketName,
    Key: `cloudfrontDistro/${bucketName}-CFDistro.json`,
    Body: new Buffer.from(JSON.stringify(response))
  };
  await provider.request('S3', 'putObject', putParams)
  return `https://${response.Distribution.DomainName}`;
};

const checkForDistribution = async (bucketName, sls, provider) => {
  const headParams = {
    Bucket: bucketName,
    Key: `cloudfrontDistro/${bucketName}-CFDistro.json`
  }
  console.log("Checking for distro");
  console.log();
  try {
    await provider.request('S3', 'headObject', headParams);
    return true;
  } catch (error) {
    if (error.statusCode === 404) {
      return false;
    }
    console.log(error);
    throw error;
  }
};

const invalidateDistribution = async (bucketName, sls, provider) => {
  const getParams = {
    Bucket: bucketName,
    Key: `cloudfrontDistro/${bucketName}-CFDistro.json`
  }
  const response = await provider.request('S3', 'getObject', getParams);
  const cfDistribution = JSON.parse(response.Body.toString('utf-8'));
  const params = {
    DistributionId: cfDistribution.Distribution.Id,
    InvalidationBatch: {
      CallerReference: Date.now().toString(),
      Paths: {
        Quantity: 1,
        Items: ["/*"]
      }
    }
  };
  try {
    await provider.request('CloudFront', 'createInvalidation', params);
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case 'TooManyInvalidationsInProgress':
        msg = "Too Many Invalidations In Progress"
      case 'NoSuchDistribution':
        msg = "No Such Distribution"
      case 'AccessDenied':
        msg = "Access Denied"
      default:
        msg = "Unable To Create Invalidation"
    }
    throw new Error (msg);
  }
}


module.exports = {
  createDistribution,
  createOriginAccessIdentity,
  checkForDistribution,
  invalidateDistribution
};
