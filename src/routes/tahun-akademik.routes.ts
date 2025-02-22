import express from "express";

const router = express.Router();

import { getAll, getOne, createData, deleteData, updateData } from "../controller/tahun-akademik.controller";

router.get("/tahun", getAll);
router.get("/tahun/:id", getOne);
router.post("/tahun", createData);
router.put("/tahun/:id", updateData);
router.delete("/tahun/:id", deleteData);

export default router;
