import { jest } from "@jest/globals";
import { LoadFiles } from "../src/load-files.js";
import { Store } from "../src/store.js";

const blacklist = {
  urls: ["www.amazon.com", "www.magazineluiza.com.br", "www.kabum.com.br"],
};

const financialContentList = {
  urls: [
    "https://www.youtube.com/",
    "https://www.google.com/",
    "https://www.uol.com.br/",
  ],
};

global.fetch = jest.fn((url) =>
  Promise.resolve({
    json: () => {
      if (url.includes("blacklist")) return Promise.resolve(blacklist);

      if (url.includes("financial-content"))
        return Promise.resolve(financialContentList);

      return Promise.resolve({});
    },
  })
);

describe("load files tests", () => {
  test("should load files to store", async () => {
    const store = new Store();
    const loadFiles = new LoadFiles("blacklist", "financial-content", store);

    await loadFiles.execute();

    expect(store.blacklist).toEqual(blacklist);
    expect(store.contentList).toEqual(financialContentList);
    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith("blacklist");
    expect(fetch).toHaveBeenCalledWith("financial-content");
  });
});
