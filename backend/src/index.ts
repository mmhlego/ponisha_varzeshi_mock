import express, { Express } from "express";
import cors from "cors";

const app: Express = express();
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World to you");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
