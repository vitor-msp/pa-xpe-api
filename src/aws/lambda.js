const serverless = require("serverless-http");
const api = require("../build.js").api;

const handler = serverless(api);

module.exports = { handler };
