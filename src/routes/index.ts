import express from "express";
import user from "./user";

const router = express.Router();

//회원관리
router.use("/user", user);

export default router;