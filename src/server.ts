import express from "express";
import {categoriesRoute} from "./routes/categories.routes"

const app = express();

app.use(express.json());
app.use(categoriesRoute);

app.listen(3333);