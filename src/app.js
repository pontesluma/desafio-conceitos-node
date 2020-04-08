const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {

  // TODO
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const data = {
    "id": uuid(),
    "title": title,
    "url": url,
    "techs": techs,
    "likes": 0
  };

  repositories.push(data);

  return response.json(data);
  // TODO
});

app.put("/repositories/:id", (request, response) => {
  // TODO
});

app.delete("/repositories/:id", (req, res) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
