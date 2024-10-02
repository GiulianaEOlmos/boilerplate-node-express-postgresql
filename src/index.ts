import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
const port = 3000;

app.use(express.json());

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
