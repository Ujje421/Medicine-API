const express = require("express");
const app = express();

app.use(express.json());

let medicines = [
  { id: 1, name: "Paracetamol" },
  { id: 2, name: "Amoxicillin" },
  { id: 3, name: "Ibuprofen" },
  { id: 4, name: "Cetirizine" }
];

app.get("/", (req, res) => {
  res.send("Medicine API is running!");
});

app.get("/api/v1/medicines", (req, res) => {
  res.json(medicines);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
