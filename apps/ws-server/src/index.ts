import "dotenv/config";
import { WebSocketServer } from "ws";
import { prisma } from "@repo/prisma/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("listening", () => {
  console.log("Server is listening on ws://localhost:8080");
});

wss.on("connection", async (ws) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  ws.send("Hi there, you are connected to the server");
});
