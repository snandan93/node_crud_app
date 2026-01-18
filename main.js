require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();

const port = process.env.PORT || 4000;

//database connection
mongoose.connect(process.env.DB_URL).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Database connection error:', err);
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.locals.message = req.session.message;
    delete req.session.message;
    next();
    });

    app.set('view engine', 'ejs');


//routes

app.use('/api', require('./routes/routes'));
app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});