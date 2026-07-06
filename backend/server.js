const express = require("express");
const cors = require("cors");      // <-- Ye line add karo
const apiRoutes = require("./routes/api");

const app = express();

app.use(cors());                   // <-- Ye line add karo

const PORT = 5000;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
