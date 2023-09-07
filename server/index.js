const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute.js');
const todoRouter = require('./routes/todoRoute.js'); 
const cookieParser = require('cookie-parser');
const cors = require('cors'); 

const corsOptions = {
  origin: '*',
  methods: 'POST', 
  allowedHeaders:'Content-Type',
  'Access-Control-Allow-Origin': '*'
}

require('dotenv').config();

mongoose.connect(process.env.URI)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.log(`error => ${err}`);
  });

app.use(cors(corsOptions)); 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../client/build/')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/user', userRouter);

app.use('/todo', todoRouter); 

app.get('/home', (req, res) => {
  return res.status(200).send('Home');
});

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('bad request'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {error: `an error occurred -> ${err}`},
  }
  const errorObj = Object.assign(defaultErr, err);
  console.log('<<< LOG ', errorObj.log, '>>>');
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app; 