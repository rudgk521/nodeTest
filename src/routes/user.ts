import {Router} from "express";
import usersController  from "../controllers/users";
//import {AuthController} from "../controller/AuthController";

const router = Router();
const users = new usersController;

//회원가입
router.post("/signup", users.signUp);

//정보
router.get("/user", users.information);


// 로그인
router.post("/login", users.login);

export default router;