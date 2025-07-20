const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const pino = require("pino")();
const expressPino = require("express-pino-logger");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const Service = require("./models/service"); // Adjust path as necessary
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use("/images", express.static(path.join(__dirname, "images")));


// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: "hfhfhffhf", // 🔒 Replace with secure value in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// CORS config
const corsOptions = {
  origin: ["http://localhost:5173", process.env.FRONTEND_ORIGIN].filter(Boolean),
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOptions));

// Logger
const logger = expressPino({ logger: pino });
app.use(logger);

// ✅ POST endpoint to receive booking form
app.post("/api/book-roof", async (req, res) => {
  const { name, email, date, location, message } = req.body;

  if (!name || !email || !date || !location || !message) {
    return res.status(400).send({ error: "All fields are required." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // nhdw zcfi jekc acar

    const mailOptions = {
      from: `"Roof Booking" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
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

// ========= ✅ SERVICE ROUTES ========= //

// POST: Add new service
app.post("/api/services", async (req, res) => {
  try {
    const newService = new Service(req.body);
    const saved = await newService.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET: All services
app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: Single service by ID
app.get("/api/services/:id", async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE: Service by ID
app.delete("/api/services/:id", async (req, res) => {
  try {
    const deleted = await Service.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Service not found" });
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT: Update service by ID
app.put("/api/services/:id", async (req, res) => {
  try {
    const updated = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ message: "Service not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// MongoDB connection
mongoose
  .connect("mongodb+srv://vafabe1143:HIz1q3VL1HQ6DGK1@cluster0.80dj8ba.mongodb.net/Roofing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => {
    pino.error("MongoDB connection error:", err);
  });

// Optional: Serve frontend build (if using React/Vite)
app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

// Start server
const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  pino.info(`Server is running on port ${port}`);
});
