import serverless from "serverless-http";
import { api } from "../../src/api.js";

const handler = serverless(api);

export { handler };
