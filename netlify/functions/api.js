import serverless from "serverless-http";
import { api } from "../../src/build.js";

const handler = serverless(api);

export { handler };
