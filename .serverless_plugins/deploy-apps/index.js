"use strict";
const deployWebApp = require("./lib/deployApp");
class TaleDeployApps {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.provider = this.serverless.getProvider("aws");
    this.options = options;
    this.commands = {
      taleDeployApps: {
        usage: 'Helps you start your first Serverless plugin',
        lifecycleEvents: [
          'deployApps',
        ],
        options: {
          message: {},
        },
      },
    };
    this.hooks = {
      "taleBuildAndDeployApps:deployApps": this.deployApp.bind(this, this.provider),
      "taleDeployApps:deployApps": this.deployApp.bind(this, this.provider)
    };
  }
  async deployApp(provider) {
    const service = this.serverless.service;
    const { webAppConfig } = service.custom;
    await deployWebApp(webAppConfig, service, this.serverless, provider);
  }
}

module.exports = TaleDeployApps;
