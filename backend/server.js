
const express = require("express");
const cors = require("cors");      
const db = require("./db");
const apiRoutes = require("./routes/api");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
