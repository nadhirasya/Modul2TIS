require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const bookRoutes = require('./routes/book.route'); 

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        message:'Nadhira Rasya Alivia, 245150707111030'
    })
})

app.use('/books',bookRoutes); 

const PORT =process.env.PORT||8000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})