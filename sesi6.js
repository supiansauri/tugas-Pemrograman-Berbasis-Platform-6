const express = require("express");

const app = express();
const port = 5000;

var motoGP = [
  {
    circuit: "Losail",
    location: "Qatar",
    winner: {
      firstname: "Andrea",
      lastname: "Dovizioso",
      country: "Italy",
    },
  },
  {
    circuit: "Autodromo",
    location: "Argentine",
    winner: {
      firstname: "Cal",
      lastname: "Crutchlow",
      country: "UK",
    },
  },
  {
    circuit: "De Jerez",
    location: "Spain",
    winner: {
      firstname: "Valentino",
      lastname: "Rossi",
      country: "Italy",
    },
  },
  {
    circuit: "Mugello",
    location: "Italy",
    winner: {
      firstname: "Andrea",
      lastname: "Dovizioso",
      country: "Italy",
    },
  },
];

app.get("/", (req, res) => {
  res.json(motoGP);
});

app.get("/country", (req, res) => {
  const countries = motoGP.map((race) => race.winner.country);
  res.json(countries);
});

app.get("/name", (req, res) => {
  const names = motoGP.map(
    (race) => `${race.winner.firstname} ${race.winner.lastname}`
  );
  res.json(names);
});

app.get("*", (req, res) => {
  res.status(400).send("Bad Request");
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});