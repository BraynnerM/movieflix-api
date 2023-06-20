import { PrismaClient } from "@prisma/client";
import express from "express";

const port = 3000;
const app = express();
const prisma = new PrismaClient();

// GET, POST, PUT, PATCH, DELETE

app.get("/movies", async (req, res) => {
    const movies = await prisma.movie.findMany();
    res.json(movies);
});

app.listen(port, () => {
    console.log(`Servidor em execução em http://localhost:${port}`);
});