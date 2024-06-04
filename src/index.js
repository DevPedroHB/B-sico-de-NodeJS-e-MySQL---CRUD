const http = require("http");
const express = require("express");
const status = require("http-status");
const sequelize = require("./database/database.js");
const routes = require("./routes/routes.js");

const app = express();

app.use(express.json());

app.use("/sistema", routes);

app.use((req, res, next) => {
  res.status.apply(status.NOT_FOUND).send("Page not found");
});
app.use((req, res, next) => {
  req.status.apply(status.INTERNAL_SERVER_ERROR).json({ error });
});

sequelize.sync({ force: false }).then(() => {
  const port = 3333;
  const server = http.createServer(app);

  app.set("port", port);

  server.listen(port);
});
