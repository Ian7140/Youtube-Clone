import express from "node_modules/express";
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();
const handleHome = (req,res) => res.send("Home");
globalRouter.get("/", handleHome);
const userRouter = express.Router();
const handleEditUser = (req,res) => res.send("Edit Users");
userRouter.get("/edit", handleEditUser);
const videoRouter = express.Router();
const handleWatchVideo = (req,res) => res.send("Watch Video");


app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/users",userRouter);

//routes = "/"
//console.log("Hello") 는 function이 아님 statement이라고 함

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //컴퓨터에서의 창문? 사용자와 소통하는 방법 , 서버는 listening 하기 시작하면 종료할 때까지 계속 Listening 함

/*
middleware = res 와 req 사이에 있는 것
next() : 다음함수로 책임 떠넘기기?
누군가 대답하기 전까지는 middleware임

url과 controller 관리를 쉽게 해줌 - "mini-application"이랑 비슷한 개념
작업중인 주제를 기반으로 url를 그룹화 해주는 역할
*/