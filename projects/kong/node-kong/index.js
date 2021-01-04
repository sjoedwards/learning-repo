const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const service = process.env.SERVICE;

const customers = [
  {
    id: 5,
    first_name: "Dodol",
    last_name: "Dargombez",
  },
  {
    id: 6,
    first_name: "Nyongot",
    last_name: "Gonzales",
  },
];

const customers2 = [
  {
    id: 7,
    first_name: "Dodol2",
    last_name: "Dargombez2",
  },
  {
    id: 8,
    first_name: "Nyongot2",
    last_name: "Gonzales2",
  },
];

const clients = [
  {
    id: 1,
    first_name: "Haha",
    last_name: "Hehe",
  },
  {
    id: 2,
    first_name: "Lala",
    last_name: "Lili",
  },
];

app.use(bodyParser.json());

app.get("/api/v1/customers", (req, res) => {
  console.log(service);
  service === "1" ? res.json(customers) : res.json(customers2);
});

app.get("/api/v1/customers/:id", (req, res) => {
  res.json(customers[req.params.id]);
});

app.post("/api/v1/clients", (req, res) => {
  res.status(201).send(req.body);
});

app.get("/api/v1/clients", (req, res) => {
  res.json(clients);
});

app.get("/api/v1/clients/:id", (req, res) => {
  res.json(clients[req.params.id]);
});

app.listen(10000, () => {
  console.log(`Server started: service ${service}`);
});
