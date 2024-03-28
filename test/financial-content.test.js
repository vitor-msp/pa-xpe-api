import { FinancialContent } from "../src/financial-content.js";
import { Store } from "../src/store.js";

describe("core tests", () => {
  let store;
  let financialContent;

  beforeAll(() => {
    store = new Store();
    store.contentList.urls = [
      "https://www.youtube.com/",
      "https://www.google.com/",
      "https://www.uol.com.br/",
    ];
    financialContent = new FinancialContent(store);
  });

  test("should return YOUTUBE url when counter is 1", () => {
    const accessCounter = 1;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return GOOGLE url when counter is 2", () => {
    const accessCounter = 2;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.google.com/");
  });

  test("should return UOL url when counter is 3", () => {
    const accessCounter = 3;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.uol.com.br/");
  });

  test("should return YOUTUBE url when counter is 4", () => {
    const accessCounter = 4;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return GOOGLE url when counter is 5", () => {
    const accessCounter = 5;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.google.com/");
  });

  test("should return UOL url when counter is 6", () => {
    const accessCounter = 6;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.uol.com.br/");
  });

  test("should return UOL url when counter is 1065", () => {
    const accessCounter = 1065;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.uol.com.br/");
  });

  test("should return UOL url when counter is 0", () => {
    const accessCounter = 0;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.uol.com.br/");
  });

  test("should return YOUTUBE url when counter is -1", () => {
    const accessCounter = -1;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return GOOGLE url when counter is -2", () => {
    const accessCounter = -2;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.google.com/");
  });

  test("should return UOL url when counter is -3", () => {
    const accessCounter = -3;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.uol.com.br/");
  });

  test("should return YOUTUBE url when counter is -163", () => {
    const accessCounter = -163;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return YOUTUBE url when counter is not informed", () => {
    const contentUrl = financialContent.get();
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return YOUTUBE url when counter is undefined", () => {
    const accessCounter = undefined;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return UOL url when counter is null", () => {
    const accessCounter = null;
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.uol.com.br/");
  });

  test("should return YOUTUBE url when counter is a string", () => {
    const accessCounter = "not a number";
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });

  test("should return YOUTUBE url when counter is a object", () => {
    const accessCounter = {};
    const contentUrl = financialContent.get(accessCounter);
    expect(contentUrl).toEqual("https://www.youtube.com/");
  });
});
