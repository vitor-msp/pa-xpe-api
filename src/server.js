const apm = require("./apm.js");
const dotenv = require("dotenv");
const api = require("./build.js").api;

dotenv.config();
api.listen(process.env.SERVER_PORT || 8000, () => console.log("api started"));
