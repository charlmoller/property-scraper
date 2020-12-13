const express = require("express");
const app = express();
const port = process.env.PORT;

const FRONT_LOG = "Test Hello to the frontend";
const SERV_LOG  = "Test Hello to the backend";

app.get("/", (req, res) => {
	res.send(FRONT_LOG);
});

app.listen(port, () => {
	console.log(SERV_LOG);
});
