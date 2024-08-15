const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
    // No need to include useNewUrlParser or useUnifiedTopology as the next update will not value both
  }).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));
  
// Define a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// Connecting routes through API

const userRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expenses');

app.use('/api', userRoutes);
app.use('/api', expenseRoutes);
