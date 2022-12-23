const express = require("express");
const app = express();

const connection = require("./model/db");
connection.once("open", () => console.log("DB Connected"));
connection.on("error", () => console.log("Error"));

const url = require("./model/schema");

const PORT = process.env.PORT || 3003;

const body = require("body-parser");
app.use(body.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log("yes");
});
app.get("/:code", require("./routes/redirect"));
// app.get("/:code", (req, res) => {
//   console.log(req.params);
// });
app.post(
  "/link",
  require("./routes/url")
  //   res.json({ main: "nice" });
);
// app.get("/get", (req, res) => {
//   console.log("hello get");
//   res.redirect("/");
// });

app.listen(PORT, console.log(`Server started on port ${PORT}`));
