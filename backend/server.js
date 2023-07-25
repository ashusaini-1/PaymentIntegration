const app = require("./app");
const dotenv = require("dotenv");
const Razorpay = require('razorpay');
const connectDatabase = require("./config/db");
dotenv.config({ path: "backend/config/config.env" });
connectDatabase();


app.listen(process.env.PORT, () => {
  console.log(`LocalHost Connected at ${process.env.PORT}`);
});

