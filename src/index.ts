import express from "express";

const app = express();

app.use(express.json());

import MakananRouter from "./routes/tahun-akademik.routes";

app.use("/api", MakananRouter);

app.listen(3000, () => console.log(`⚡️[server]: Server is running at http://localhost:3000`));
