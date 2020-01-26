const createOriginAccessIdentity = async (sls, provider) => {
  const now = new Date().toISOString();
  const params = {
    CloudFrontOriginAccessIdentityConfig: { /* required */
      CallerReference: now, /* required */
      Comment: `Automatically Generated via Serverless on ${now}` /* required */
    }
  };
  try {
    let response = await provider.request('CloudFront', 'createCloudFrontOriginAccessIdentity', params);
    let  { Id, S3CanonicalUserId } = response.CloudFrontOriginAccessIdentity;
    return { Id, S3CanonicalUserId }
  } catch (e) {
    let msg = "";
    switch (e.code) {
      case 'CloudFrontOriginAccessIdentityAlreadyExists':
        msg = "CloudFront Origin Access Identity Already Exists"
      case 'TooManyCloudFrontOriginAccessIdentities':
        msg = "Too Many CloudFront Origin Access Identities"
      default:
        console.log(e);
        msg = "Error Creating Origin Access Identity"
    }
    throw new Error(msg);
  }
}

module.exports = {
  createOriginAccessIdentity
}
