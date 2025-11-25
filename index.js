const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");

const app = express();
const port = process.env.PORT || 3000;

connectToMongo();

app.use(express.json());
app.use(cors());

app.use("/api/product", require("./routes/product"));
app.use("/api/filteredproduct", require("./routes/filteredProduct"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
