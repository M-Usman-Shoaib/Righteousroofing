const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const pino = require("pino")();
const expressPino = require("express-pino-logger");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer"); // ✅ REQUIRED!
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "hfhfhffhf",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// CORS
const corsOptions = {
  origin: ["http://localhost:5173"],
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));

// Logger
const logger = expressPino({ logger: pino });
app.use(logger);

// ✅ POST endpoint to receive form data
app.post("/api/book-roof", async (req, res) => {
  const { name, email, date, location, message } = req.body;

  if (!name || !email || !date || !location || !message) {
    return res.status(400).send({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "usmanshoaib537@gmail.com",       // 🔁 Replace with your email
        pass: "your_app_password",          // 🔁 Use an App Password
      },
    });

    const mailOptions = {
      from: email,
      to: "usmanshoaib537@gmail.com",           // 🔁 Where to receive the booking
      subject: "New Roof Booking Request",
      html: `
        <h2>New Roof Booking Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inspection Date:</strong> ${date}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Query:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: "Booking submitted successfully." });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).send({ error: "Failed to send booking." });
  }
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Roofing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    pino.error("MongoDB connection error:", err);
  });

// Optional: serve frontend (if needed)
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  pino.info(`Server is running on port ${port}`);
});
