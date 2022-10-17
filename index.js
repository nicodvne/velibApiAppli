const express = require("express");
const routes = require("./routes/routes.js");
const dotenv = require("dotenv");

const app = express()

dotenv.config();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(routes);
app.set('trust proxy', true);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})