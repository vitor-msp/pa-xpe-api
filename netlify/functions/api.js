import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";
import blacklist from "../../blacklist.json" assert { type: "json" };
import financialContentUrls from "../../financial-content-urls.json" assert { type: "json" };

const app = express();
app.use(cors());
const router = Router();

const getSiteUrl = async (counter) => {
  const siteList = financialContentUrls.urls;
  let siteNumber = counter % siteList.length;
  siteNumber = siteNumber <= 0 ? siteList.length : siteNumber;
  const siteUrl = siteList[siteNumber - 1];
  return siteUrl;
};

router.get("/financial-content", async (req, res) => {
  try {
    const siteUrl = await getSiteUrl(req.query.counter);
    res.redirect(siteUrl);
  } catch (error) {
    console.log(error);
    res.send();
  }
});

router.get("/blacklist", async (_req, res) => {
  try {
    res.json(blacklist);
  } catch (error) {
    console.log(error);
    res.send();
  }
});

app.use("/api", router);

export const handler = serverless(app);
