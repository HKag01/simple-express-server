import express, { Request, Response } from "express";

const app = express();
const startTime = Date.now();

app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
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

interface SignupRequestBody {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

app.post("/signup", (req: Request<{}, {}, SignupRequestBody>, res: Response) => {
	const { email, password, firstName, lastName } = req.body;

	// Validate required fields
	if (!email || !password || !firstName || !lastName) {
		return res.status(400).json({
			status: "error",
			message: "Missing required fields: email, password, firstName, lastName"
		});
	}

	// Validate email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return res.status(400).json({
			status: "error",
			message: "Invalid email format"
		});
	}

	// Validate password strength
	if (password.length < 8) {
		return res.status(400).json({
			status: "error",
			message: "Password must be at least 8 characters long"
		});
	}

	// Simulate successful signup
	res.status(201).json({
		status: "success",
		message: "User registered successfully",
		data: {
			email: email,
			firstName: firstName,
			lastName: lastName
		}
	});
});

app.listen(4003);
