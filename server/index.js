const express = require("express");
require("./models/dbConfig");
const spotsRoutes = require("./routes/spotsController");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.use(cors());
app.use("/spots", spotsRoutes);

app.get("/", (req, res) => {
  res.send("Hello to climbing spots API");
});

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
