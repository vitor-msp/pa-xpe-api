import supertest from "supertest";
import { FinancialContent } from "../src/financial-content.js";
import { Controller } from "../src/controller.js";
import { Api } from "../src/api.js";
import { Store } from "../src/store.js";

describe("api tests", () => {
  let api;
  const blacklist = [
    "www.amazon.com",
    "www.magazineluiza.com.br",
    "www.kabum.com.br",
  ];
  const contentList = [
    "https://www.youtube.com/",
    "https://www.google.com/",
    "https://www.uol.com.br/",
  ];

  buildTest = () => {
    const store = new Store();
    store.blacklist.urls = blacklist;
    store.contentList.urls = contentList;
    const controller = new Controller(new FinancialContent(store), store);
    api = new Api(controller).build();
  };

  beforeAll(buildTest);

  test("should return blacklist with status code 200", async () => {
    const response = await supertest(api).get("/api/blacklist").send();
    expect(response.statusCode).toBe(200);
    expect(response.body.urls).toEqual(blacklist);
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
    const response = await supertest(api)
      .get("/api/financial-content")
      .send();
    expect(response.statusCode).toBe(302);
    expect(response.headers["location"]).toEqual("https://www.youtube.com/");
  });
});
