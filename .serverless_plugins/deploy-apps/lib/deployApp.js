const fs = require("fs");
const {
  uploadItemsToS3,
  checkForS3Bucket,
  handleExistingBucket,
  handleCreatingBucket
} = require("./s3Utils.js");
const {
  createDistribution,
  checkForDistribution,
  invalidateDistribution
} = require("./cloudFrontUtils");
const { findAndReplaceDependencies } = require("./lambdaUtils");
const isDir = path => {
  return fs.lstatSync(path).isDirectory();
};


const getDistFolder = entryPoint => {
  // let reactProject = JSON.parse(fs.readFileSync(`${entryPoint}angular.json`).toString("utf-8"));
  // let app = reactProject.projects[Object.keys(reactProject.projects)[0]];
  let distFolder = 'out'
  if (entryPoint) {
    distFolder = `${entryPoint}/out`;
  }
  return distFolder;
}

const walk = (startingPoint, acc) => {
  const dir = fs.readdirSync(startingPoint);
  dir.forEach(item => {
    if (!isDir(`${startingPoint}/${item}`)) {
      acc.push(`${startingPoint}/${item}`);
    } else {
      walk(`${startingPoint}/${item}`, acc);
    }
  });
};

const s3Handler = async (
  bucketName,
  entryPoint,
  region,
  dirItems,
  sls,
  provider
) => {
  let originAccessID;
  if (await checkForS3Bucket(bucketName, sls, provider)) {
    await handleExistingBucket(bucketName, sls, provider);
    originAccessID = null
  } else {
    originAccessID = await handleCreatingBucket(bucketName, region, sls, provider);
  }
  await uploadItemsToS3(bucketName, dirItems, entryPoint, sls, provider);
  return originAccessID;
};

const cloudFrontHandler = async (bucketName, originAccessID, websiteEntry, sls, provider) => {
  if (await checkForDistribution(bucketName, sls, provider)) {
    await invalidateDistribution(bucketName, sls, provider);
    console.log(`Distribution cache invalidated`);
    console.log();
  } else {
    let domainName = await createDistribution(bucketName, originAccessID, websiteEntry, sls, provider);
    console.log(`Distribution created: Your domain name is ${domainName}`);
    console.log();
  }
};

const start = async (
  bucketName,
  entryPoint,
  websiteEntry,
  functions,
  sls,
  provider
) => {
  sls.cli.log(`Deploy started for ${entryPoint}`)
  const region = sls.service.provider.region;
  let dirItems = [];
  distFolder = getDistFolder(entryPoint);
  walk(distFolder, dirItems);
  let originAccessID = await s3Handler(
    bucketName,
    distFolder,
    region,
    dirItems,
    sls,
    provider
  );
  console.log("All items uploaded to bucket");
  console.log();
  await cloudFrontHandler(bucketName, originAccessID, websiteEntry, sls, provider);
  await findAndReplaceDependencies(functions, bucketName, sls, provider);
  console.log("Dependencies Updated");
  console.log();
  sls.cli.log(`Deploy Complete for ${entryPoint}`);
};

module.exports = (webApps, service, sls, provider) => {
  const functions = service.functions;
  return Promise.all(
    Object.keys(webApps).map(async app => {
      let { webAppDeploymentBucket, webAppEntryPoint, websiteEntry } = webApps[app];
      if (!websiteEntry) {
        websiteEntry = "index.html";
      }
      await start(
        webAppDeploymentBucket,
        webAppEntryPoint,
        websiteEntry,
        functions,
        sls,
        provider
      );
    })
  );
};
