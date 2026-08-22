import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
	res.json({
		message: "hi",
	});
});

app.post("/signup", (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({
			error: "Email and password are required",
		});
	}

	res.status(201).json({
		message: "User signed up successfully",
		user: {
			email: email,
		},
	});
});

app.listen(4003);
