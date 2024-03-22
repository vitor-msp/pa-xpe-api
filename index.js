import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const getSiteUrl = async (counter) => {
  const reponse = await fetch(process.env.FINANCIAL_CONTENT_URLS);
  const json = await reponse.json();
  const siteList = json.urls;
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

app.listen(8000, () => console.log("api started"));
