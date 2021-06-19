const express = require("express");
const formidable = require("express-formidable");
const cors = require("cors");
require("dotenv").config();

var API_KEY = process.env.MAILGUN_API_KEY;
var DOMAIN = process.env.MAILGUN_DOMAIN;
var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

const app = express();
app.use(formidable());
app.use(cors());

app.post("/form", (req, res) => {
  const data = {
    from: `${req.fields.firstname} ${req.fields.lastname} <${req.fields.email}>`,
    to: "desseaux.fdx@gmail.com",
    subject: "Nouveau formulaire remplit",
    text: `${req.fields.description}`,
  };
  mailgun.messages().send(data, (error, body) => {
    console.log(body);
    console.log(error);
    if (!error) {
      res.json({ message: "Formulaire reçu - mail envoyé" });
    } else {
      res.status(400).json(error);
    }
  });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

app.listen(3000, () => {
  console.log("Server started");
});
