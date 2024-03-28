import dotenv from "dotenv";
dotenv.config();

let blacklist;
let financialContentUrls;

const loadFiles = async () => {
  let response = await fetch(process.env.BLACKLIST_URL);
  blacklist = await response.json();

  response = await fetch(process.env.FINANCIAL_CONTENT_LIST_URL);
  financialContentUrls = await response.json();
};

loadFiles();
setInterval(loadFiles, process.env.FETCH_INTERVAL_IN_MS || 3600000);

export { blacklist, financialContentUrls };
