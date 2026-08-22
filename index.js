import express from "express";

const app = express();
const startTime = Date.now();

app.use(express.json());

app.get("/health", (req, res) => {
	const uptime = Math.floor((Date.now() - startTime) / 1000);
	
	res.status(200).json({
		status: "UP",
		timestamp: new Date().toISOString(),
		uptime: uptime,
		checks: {
			server: "UP"
		}
	});
});

app.listen(4003);
