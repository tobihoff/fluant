const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect Database
connectDB();

const Port = 7100;

app.get("/", (req, res) => res.send("API is running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profiles"));

app.listen(Port, () => console.log(`Server is running on Port ${Port}`));
