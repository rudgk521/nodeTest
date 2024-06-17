// index.ts
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import http from "http";
import "dotenv/config";
import { stream } from "./utils/winston";
import indexRouter from "./routes/index";
import mongoose from 'mongoose';
import connect from './db';
//import { resolveObjMapThunk } from 'graphql';

const app = express();
const port = Number(process.env.PORT)||5005;

// express 세팅
// body-parser는 내장되어있음. json 파싱하기 위해서 설정만 추가
app.use(express.json());
// // express에는 json 데이터를 파싱하는 모듈이 내장되어있다.
// // 하지만 json만 되고 x-www-form-urlencoded를 파싱하기 위해서 아래를 확장해야 한다.
app.use(express.urlencoded({ extended: true }));
app.use(morgan("short", { stream }));
app.use(helmet());
app.use(cors()); //모든 도메인에서 제한 없이 해당 서버에 요청을 보내고 응답을 받을 수 있다.
let corsOptions = {
    origin: 'https://www.domain.com',
    credentials: true
}
//app.use(cors(corsOptions)); // option의 특정 도메인만 서버에 req, res 가능하다.

//router 세팅
app.use("/api", indexRouter);

connect();
//const mongoURI = `mongodb://127.0.0.1:27017`
// mongoose.connect(mongoURI).then(() => {
//   console.log("mongoose connected");
// }).catch((err) => {
//   console.log("DB connection fail", err);
// });

// 서버 실행
app.listen(port, '0.0.0.0', () => { //ip 주소를 가져올때 ipv6 형식으로 받으나 '0.0.0.0' 추가해 주면 ipv4 형식으로 전달받을 수 있다.
  console.log(`Start service on ${port} port!`);
})
