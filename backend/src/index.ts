import cors from "cors";
import express, { Express } from "express";
import { Coaches } from "./data/Coaches";
import { Videos } from "./data/Videos";
import Coach from "./model/Coach";
import random from "random-name";

const app: Express = express();
const port = 3001;

app.use(cors());

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

app.get("/videos", (req, res) => {
	res.send(Videos);
});

app.get("/coaches", (req, res) => {
	res.send(Coaches);
});

app.get("/seed/coaches", (req, res) => {
	const coaches: Coach[] = [];

	for (let i = 1; i <= 30; i++) {
		coaches.push({
			id: i,
			firstName: random.first(),
			lastName: random.last(),
			birthDate: new Date(
				Math.random() * 20 + 1990,
				Math.random() * 12,
				Math.random() * 30
			).toISOString(),
			level: Math.floor(Math.random() * 4) + 1,
			phoneNumber: "",
		});
	}

	res.send(coaches);
});
