const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express(); // ✅ Define 'app' first
const PORT = process.env.PORT || 5000;

// ✅ Middleware (MUST be before routes)
app.use(cors());
app.use(express.json()); // ✅ Important for parsing JSON

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ✅ Import Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// ✅ Basic API Test
app.get('/', (req, res) => {
    res.send("API is running...");
});

// ✅ Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
