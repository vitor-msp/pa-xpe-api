const dotenv = require("dotenv");
const LoadFiles = require("./load-files.js").LoadFiles;
const Api = require("./api.js").Api;
const Controller = require("./controller.js").Controller;
const FinancialContent = require("./financial-content.js").FinancialContent;
const Store = require("./store.js").Store;

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
(async () => await loadFiles.execute())();
setInterval(loadFiles.execute, fetchIntervalInMs);

module.exports = { api };
