const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Application is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at${PORT}`);
});
