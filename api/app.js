import express from "express";
const app = express();
const port = 8800;

console.log("test2w");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
