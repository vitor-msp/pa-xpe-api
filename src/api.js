import express, { Router } from "express";
import cors from "cors";

class Api {
  constructor(controller) {
    this.controller = controller;
  }

  build() {
    const api = express();
    api.use(cors());
    const router = Router();
    api.use("/api", router);

    router.get("/blacklist", (req, res) =>
      this.controller.getBlacklist(req, res)
    );
    router.get("/financial-content", (req, res) =>
      this.controller.getFinancialContent(req, res)
    );

    return api;
  }
}

export { Api };
