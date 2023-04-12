import express from "express";

const PORT = 4000;

const app = express();

const URL_Logger = (req, res, next) => {
  console.log("Path:" , req.path);
  next();
};

const Time_Logger = (req, res, next) => {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  console.log(`Time : ${date.getFullYear()}.${date.getMonth()}.${date.getDay()}`);
  next();
};

const Security_Logger = (req, res) => {
  if (req.http === 'https') {
    console.log("Secure");
  } else {
    console.log("Insecure");
  }
};

const Protecter_Middleware = (req, res) => {
  const url = req.URL_Logger;
  if (URL_Logger === "/protected") {
    return res.send("Not Allowed");
  }
};

app.get("/", URL_Logger, Time_Logger, Security_Logger);
app.use(Protecter_Middleware);

const handleListening = () =>
  console.log("Server listening on port http://localhost:$PORT🚀");

app.listen(PORT, handleListening);
