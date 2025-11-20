import "dotenv/config";
import express, { Request, Response } from "express";
import { prisma } from "@repo/prisma/client";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hi, there");
});

app.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.create({ data: { username, password } });
    return res.status(201).json({ message: "Sign up successful", id: user.id });
  } catch (error) {
    return res.status(500).json({ message: "Error signing up", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
