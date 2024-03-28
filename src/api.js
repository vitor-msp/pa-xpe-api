import express, { Router } from "express";
import cors from "cors";
import { getBlacklist, getFinancialContent } from "./controller.js";

const api = express();
api.use(cors());
const router = Router();
api.use("/api", router);

router.get("/financial-content", getFinancialContent);
router.get("/blacklist", getBlacklist);

export { api };
