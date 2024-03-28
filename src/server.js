import dotenv from "dotenv";
import { api } from "./api.js";

dotenv.config();
api.listen(process.env.SERVER_PORT || 8000, () => console.log("api started"));