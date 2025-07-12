const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/expense-tracker', { useNewUrlParser: true, useUnifiedTopology: true });
// Sample route
app.get('/', (req, res) => res.send('Expense Tracker API'));
app.listen(5000, () => console.log('Server running on port 5000'));