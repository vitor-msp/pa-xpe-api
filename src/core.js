import blacklist from "../blacklist.json" assert { type: "json" };
import financialContentUrls from "../financial-content-urls.json" assert { type: "json" };

const getFinancialContentUrl = async (accessCounter) => {
  const contentList = financialContentUrls.urls;
  let contentPosition = accessCounter % contentList.length;
  contentPosition = contentPosition <= 0 ? contentList.length : contentPosition;
  const contentUrl = contentList[contentPosition - 1];
  return contentUrl;
};

const getFinancialContent = async (req, res) => {
  try {
    const contentUrl = await getFinancialContentUrl(req.query.counter);
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
