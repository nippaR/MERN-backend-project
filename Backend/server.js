const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://sadula:1234@cluster0.lhliwgv.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('****MongoDB connected****'))
.catch((err) => console.log(err));



// Define a schema and model
const clientSchema = new mongoose.Schema({
    clientName: String,
    email:String,
    phone:String,
});

const Client = mongoose.model('Client', clientSchema);

// Routes


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

