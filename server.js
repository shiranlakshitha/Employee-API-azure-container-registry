const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables
dotenv.config();

const app = express();

// Body Parser Middleware
app.use(express.json());

// Enable CORS
app.use(cors());

// Import Routes
const employeeRoutes = require('./routes/employeeRoutes');

// Mount Routes
app.use('/api/employees', employeeRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
if (!MONGODB_URI) {
    console.warn('MONGODB_URI is not defined in .env file. Please add it to connect to the database.');
} else {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('MongoDB Connected...'))
        .catch(err => console.error('MongoDB Connection Error:', err.message));
}

app.listen(PORT, () => {
    console.log(`Server running in development mode on port ${PORT}`);
});
