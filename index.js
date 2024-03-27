import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import blacklist from "./blacklist.json" assert { type: "json" };
import financialContentUrls from "./financial-content-urls.json" assert { type: "json" };

dotenv.config();
const app = express();
app.use(cors());

const getSiteUrl = async (counter) => {
  const siteList = financialContentUrls.urls;
  let siteNumber = counter % siteList.length;
  siteNumber = siteNumber <= 0 ? siteList.length : siteNumber;
  const siteUrl = siteList[siteNumber - 1];
  return siteUrl;
};

app.get("/financial-content", async (req, res) => {
  try {
    const siteUrl = await getSiteUrl(req.query.counter);
    res.redirect(siteUrl);
  } catch (error) {
    console.log(error);
    res.send();
  }
});

app.get("/blacklist", async (_req, res) => {
  try {
    res.json(blacklist);
  } catch (error) {
    console.log(error);
    res.send();
  }
});

app.listen(8000, () => console.log("api started"));
