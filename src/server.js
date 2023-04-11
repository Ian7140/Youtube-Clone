import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req,res) => {
  return res.send("Home");
}

const handleLogin  = (req, res) => {
  return res.send ("Login");
}

const handleContact  = (req, res) => {
  return res.send ("Contact");
}

const handleAbout  = (req, res) => {
  return res.send ("About");
}
app.get("/", handleHome);
app.get("/login",handleLogin);
app.get("/contact",handleContact);
app.get("/about",handleAbout);

const handleListening = () => console.log("Server listening on port http://localhost:$PORT🚀");

app.listen(PORT , handleListening);

