import dotenv from "dotenv";
import { api } from "./build.js";

dotenv.config();
api.listen(process.env.SERVER_PORT || 8000, () => console.log("api started"));
