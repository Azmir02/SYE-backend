require("dotenv").config();
const express = require("express");
const { connect } = require("./database/dbConfig");
const userRouter = require("./routes/UserRouter");
const postRouter = require("./routes/Postrouter");
const uploadRouter = require("./routes/UploadRouter");
const reactRouter = require("./routes/Reacts");
const fileUpload = require("express-fileupload");
const cors = require("cors")

// Database-connection
connect();

// Configure CORS options
const corsOptions = {
  origin: 'https://sye-frontend-gray.vercel.app', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow OPTIONS method for preflight requests
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Optionally, handle OPTIONS requests separately
app.options('*', cors(corsOptions));
// middleware
const app = express();

app.use(express.json());

// for file upload
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

//all-work
app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", uploadRouter);
app.use("/api", reactRouter);

const Port = process.env.PORT || 8000;
app.listen(Port);
