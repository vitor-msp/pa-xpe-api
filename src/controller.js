import fs from "fs";
import { getFinancialContentUrl } from "./core.js";

let blacklist;
let financialContentUrls;

const loadFiles = () => {
  fs.readFile("blacklist.json", (error, data) => {
    if (error) throw error;
    blacklist = JSON.parse(data);
  });

  fs.readFile("financial-content-urls.json", (error, data) => {
    if (error) throw error;
    financialContentUrls = JSON.parse(data);
  });
};

const getFinancialContent = async (req, res) => {
  try {
    console.log(req.query.domain);
    const contentList = financialContentUrls.urls;
    const contentUrl = getFinancialContentUrl(contentList, req.query.counter);
    res.redirect(contentUrl);
  } catch (error) {
    console.error(error);
    res.send();
  }
};

const getBlacklist = async (_req, res) => {
  try {
    res.json(blacklist);
  } catch (error) {
    console.error(error);
    res.send();
  }
};

loadFiles();

export { getFinancialContent, getBlacklist };
