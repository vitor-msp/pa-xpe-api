const dotenv = require("dotenv");
dotenv.config();

if (!process.env.ELASTIC_APM_URL)
  throw new Error("missing ELASTIC_APM_URL environment variable");

const elasticApm = require("elastic-apm-node");
elasticApm.start({
  serviceName: "",
  secretToken: "",
  serverUrl: process.env.ELASTIC_APM_URL,
  environment: "production",
});
