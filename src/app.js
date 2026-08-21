import { config } from "dotenv";
import express from "express";
import morgan from "morgan";
config();
import Redis from "ioredis";
import { userModel } from "./models/user.model.js";
import rateLmit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine" , "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));




app.post("/users", async (req, res) => {
  try {
    const user = await userModel.create({
      name: req.body.name,
      email: req.body.email,
    });

    res.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});




app.get("/",(req ,res)=>{
  res.render("index");
}) 

export default app;