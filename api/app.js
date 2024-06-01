import express from "express";
import postRoute from "./routes/post.route.js";

const app = express();
const port = 8800;

app.use("/api/posts", postRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
