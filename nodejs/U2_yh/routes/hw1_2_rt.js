import express from "express";
import { parseTime, unixTime } from "../controller/getJsonTime.js";

//controller

const router = express.Router();

router.get("/api/parsetime", parseTime());
router.get("/api/unixtime", unixTime());

export default router;
