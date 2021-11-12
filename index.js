import dotenv from "dotenv";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
//middlewares
import insertLog from "./src/middleware/insertLog";
import statusNotFound from "./src/middleware/serverHandler";

const app = express();
dotenv.config();

const port = process.env.APP_PORT || 6969;
const prefix = process.env.PREFIX_URL || "/api/v1";

app.listen(port).on("listening", () => {
  console.log(`API server started on port : ${port}`);
});

app.use(express.static("pubic"));
const corsOptions = { exposedHeaders: ["Authorization", "App-Control"] };
app.use(cors(corsOptions));

app.use(insertLog);

//router
import indexRouter from "./src/routes/index";
import moviesRouter from "./src/routes/movies";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("*", cors());
app.use(`${prefix}`, indexRouter);
app.use(`${prefix}`, moviesRouter);

app.use(statusNotFound);
