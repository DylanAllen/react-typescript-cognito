const crypto = require("crypto");

module.exports.getParams = (bucketName, originAccessID, websiteEntry) => {
  const bucketEndpoint = `${bucketName}.s3.amazonaws.com`;
  const bucketOriginID = crypto
    .randomBytes(parseInt(bucketEndpoint.length / 2))
    .toString("hex");
  let { Id } = originAccessID;
  return {
    DistributionConfig: {
      /* required */
      CallerReference: new Date().toISOString() /* required */,
      Comment: "" /* required */,
      DefaultCacheBehavior: {
        /* required */
        ForwardedValues: {
          /* required */
          Cookies: {
            /* required */
            Forward: "none" /* required */
          },
          QueryString: false /* required */
        },
        MinTTL: 3600 /* required */,
        TargetOriginId: bucketOriginID /* required */,
        TrustedSigners: {
          /* required */
          Enabled: false /* required */,
          Quantity: 0 /* required */
        },
        ViewerProtocolPolicy: "https-only" /* required */,
        AllowedMethods: {
          Items: [
            /* required */
            "GET",
            "HEAD",
            "OPTIONS"
          ],
          Quantity: 3 /* required */,
          CachedMethods: {
            Items: [
              /* required */
              "GET",
              "HEAD",
              "OPTIONS"
            ],
            Quantity: 3 /* required */
          }
        },
        Compress: true
      },
      Enabled: true /* required */,
      Origins: {
        /* required */
        Items: [
          /* required */
          {
            DomainName: bucketEndpoint /* required */,
            Id: bucketOriginID /* required */,
            S3OriginConfig: {
              OriginAccessIdentity: `origin-access-identity/cloudfront/${Id}`
            }
          }
          /* more items */
        ],
        Quantity: 1 /* required */
      },
      CacheBehaviors: {
        Quantity: 0 /* required */
      },
      CustomErrorResponses: {
        Quantity: 2,
        Items: [
          {
            ErrorCode: 404, /* required */
            ErrorCachingMinTTL: 300,
            ResponseCode: '200',
            ResponsePagePath: `/${websiteEntry}`
          },
          {
            ErrorCode: 403, /* required */
            ErrorCachingMinTTL: 300,
            ResponseCode: '200',
            ResponsePagePath: `/${websiteEntry}`
          }
        ] /* required */
      },
      IsIPV6Enabled: true
    }
  };
};
