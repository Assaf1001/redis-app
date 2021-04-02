const express = require("express");
const cors = require("cors");

const port = process.env.PORT;
const redisRouter = require("./redisRouter.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(redisRouter);

app.use("/", (req, res) => {
    res.send("ok");
});

app.listen(port, () => {
    console.log("Server is connected, Port:", port);
});
