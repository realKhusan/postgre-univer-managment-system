const express = require("express");
const app = express();
const path = require("path");
const ROUTE = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/students", require("./routes/students"));
app.use("/api/courses", require("./routes/courses"));
app.use("/api/enrollments", require("./routes/enrollments"));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "main.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});
app.listen(ROUTE, () => {
  console.log(`server is running on port ${ROUTE}`);
});
