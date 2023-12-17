const express = require("express");
const app = express();
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/userRoutes");
const categoryRootRoutes = require("./routes/categoryRootRoutes");

// environment variables
require("dotenv").config();
const port = process.env.PORT;
const mongoLink = process.env.DATABASE_LINK;

// middlewares
app.use(express.json());
app.use("/api/category", categoryRootRoutes);
app.use("/api/user", userRoutes);
app.use("/api/todos", todoRoutes);

app.listen(port, () => {
  mongoose
    .connect(mongoLink)
    .then(() => console.log(`connected to mongo on port ${port}`))
    .catch((e) => console.log(e));
});
