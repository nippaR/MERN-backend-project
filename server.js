const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');


//app midleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://sadula:1234@cluster0.lhliwgv.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});


