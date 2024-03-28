import fs from "fs";

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

loadFiles();

export { blacklist, financialContentUrls };
