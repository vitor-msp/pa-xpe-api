import dotenv from "dotenv";
import { LoadFiles } from "./load-files.js";
import { Api } from "./api.js";
import { Controller } from "./controller.js";
import { FinancialContent } from "./financial-content.js";
import { Store } from "./store.js";

dotenv.config();
if (!process.env.BLACKLIST_URL || !process.env.FINANCIAL_CONTENT_LIST_URL) {
  throw new Error("error to load environment variables");
}
const fetchIntervalInMs = process.env.FETCH_INTERVAL_IN_MS || 3600000;

const store = new Store();

const controller = new Controller(new FinancialContent(store), store);
const api = new Api(controller).build();

const loadFiles = new LoadFiles(
  process.env.BLACKLIST_URL,
  process.env.FINANCIAL_CONTENT_LIST_URL,
  store
);
await loadFiles.execute();
setInterval(loadFiles.execute, fetchIntervalInMs);

export { api };
