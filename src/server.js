import express from "node_modules/express";
const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
}
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => { //arrow function은 return을 포함하고 있음
  return res.send("I love middlewares"); // I love middlewares를 보냄 
};
app.get("/", gossipMiddleware, handleHome);

app.get("/", logger, handleHome);
//routes = "/"
//console.log("Hello") 는 function이 아님 statement이라고 함

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening); //컴퓨터에서의 창문? 사용자와 소통하는 방법 , 서버는 listening 하기 시작하면 종료할 때까지 계속 Listening 함

/*
middleware = res 와 req 사이에 있는 것
next() : 다음함수로 책임 떠넘기기?
누군가 대답하기 전까지는 middleware임
*/
