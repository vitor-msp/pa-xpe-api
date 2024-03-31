const serverless = require("serverless-http");
const { api } = require("../build.js");

const handler = serverless(api);

module.exports = { handler };
