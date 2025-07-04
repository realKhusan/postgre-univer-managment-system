const express = require("express");
const app = express();
const path = require("path");
const ROUTE = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.listen(ROUTE, () => {
  console.log(`server is running on port ${ROUTE}`);
});
