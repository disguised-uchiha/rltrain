import express from "express";
import { router } from "./routes";
import cors from "cors";
import packageJson from "../package.json";

const app = express();

app.set("port", process.env.PORT || 8000);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection: MONGO
require("./database/mongo");

app.get("/", (_, res) => {
  res.send({
    name: packageJson.name,
    version: packageJson.version
  });
});

app.use("/api", router);

export { app };
