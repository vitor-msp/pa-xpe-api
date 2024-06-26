const supertest = require("supertest");
const { FinancialContent } = require("../src/financial-content.js");
const { Controller } = require("../src/controller.js");
const { Api } = require("../src/api.js");
const { Store } = require("../src/store.js");
const { blacklist } = require("./file-examples/blacklist.js");
const {
  financialContentList,
} = require("./file-examples/financial-content-list.js");

describe("api tests", () => {
  let api;

  buildTest = () => {
    const store = new Store();
    store.blacklist = blacklist;
    store.contentList = financialContentList;
    const controller = new Controller(new FinancialContent(store), store);
    api = new Api(controller).build();
  };

  beforeAll(buildTest);

  test("should return blacklist with status code 200", async () => {
    const response = await supertest(api).get("/api/blacklist").send();
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(blacklist);
  });

  test("should redirect to YOUTUBE url with status code 302", async () => {
    const response = await supertest(api)
      .get("/api/financial-content?counter=1")
      .send();
    expect(response.statusCode).toBe(302);
    expect(response.headers["location"]).toEqual("https://www.youtube.com/");
  });

  test("should redirect to GOOGLE url with status code 302", async () => {
    const response = await supertest(api)
      .get("/api/financial-content?counter=2")
      .send();
    expect(response.statusCode).toBe(302);
    expect(response.headers["location"]).toEqual("https://www.google.com/");
  });

  test("should redirect to UOL url with status code 302", async () => {
    const response = await supertest(api)
      .get("/api/financial-content?counter=3")
      .send();
    expect(response.statusCode).toBe(302);
    expect(response.headers["location"]).toEqual("https://www.uol.com.br/");
  });

  test("should redirect to YOUTUBE url with status code 302 when counter not informed", async () => {
    const response = await supertest(api).get("/api/financial-content").send();
    expect(response.statusCode).toBe(302);
    expect(response.headers["location"]).toEqual("https://www.youtube.com/");
  });
});
