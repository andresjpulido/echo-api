import express, { Application, Request, Response } from "express";
 
import cors from "cors";
 
 
const app: Application = express();
 
app.use(express.json());

// Enable CORS for all routes
app.use(cors({
  origin: "*",
}));

// Default
app.get("/api", (req: Request, res: Response) => {
  res.status(201).json({ message: "Welcome to my test ts" });
});

 
const PORT = process.env.PORT || 5005;

app.listen(PORT, (): void => console.log(`Server is running on ${PORT}`));