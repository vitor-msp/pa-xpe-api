import { getFinancialContentUrl } from "./core.js";
import { blacklist, financialContentUrls } from "./load.js";

const getFinancialContent = async (req, res) => {
  try {
    console.log(req.query.domain);
    const contentUrl = getFinancialContentUrl(
      financialContentUrls.urls,
      req.query.counter
    );
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

export { getFinancialContent, getBlacklist };
