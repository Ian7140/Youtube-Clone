import express from "express";
const PORT = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to: ${req.url}`);
}
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};
app.get("/", gossipMiddleware, handleHome);

app.get("/", logger, handleHome);

const handleListening = () =>
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);