const express = require("express");
const cors = require("cors");

const termekRoutes = require("./routes/termekRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/termekek", termekRoutes);

app.listen(PORT, () => {
  console.log(`A szerver fut a http://localhost:${PORT} címen`);
});
