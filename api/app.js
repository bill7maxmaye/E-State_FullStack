import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
const app = express();
const port = 8800;

app.use(express.json());

//routes or api endpoints
app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
