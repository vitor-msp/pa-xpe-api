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

});
