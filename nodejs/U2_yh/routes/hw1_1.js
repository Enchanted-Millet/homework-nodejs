import express from "express";
import { Router } from "express";
import getMatrix from "../controller/getMatrix.js";

const router = Router();
router.get("/", getMatrix());
// router.get("/:matrixSize", getMatrix("params"));
router.post("/api/getMatrix", getMatrix("body"));

export default router;
