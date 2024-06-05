import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//size of json accepted by the server
app.use(
  express.json({
    limit: "16kb",
  })
);

// encoding of the url because there are some % or & happend in URL
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

//storing files and folders in server any oe can access
app.use(express.static("public"));

//to access the cookies from browser of user or can set like performing CRUD on cookies
// we can put some secure cookies in user browser and server is only can read and remove that cookies
app.use(cookieParser());

export { app };
