import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.json({
		message: "hi",
		time: new Date().toISOString(),
	});
});

app.listen(4003);
