import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

// the below statement states that from which origin(website/url) data is allowed (* means any here we can use it but not in industry level)
app.use(cors({
    origin: process.env.CROS_ORIGIN,
    credentials: true
}))

// how much json data we will store
app.use(express.json({limit: "16kb"}))

// urlencoder
// app.use(express.urlencoded()); // this is enough but we will add here the extended to pass objects in objects.
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"));
app.use(cookieParser())

export { app }