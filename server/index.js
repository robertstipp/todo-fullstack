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
  origin: 'http://localhost:3001',
  methods: 'POST', 
  allowedHeaders:'Content-Type',
  Credential: true // MAKE SURE THIS STAYS TRUE, NEEDED FOR USING COOKIES WITH CORS
}

require('dotenv').config();

mongoose.connect(process.env.URI)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    console.log(`error => ${err}`);
  });

  mongoose.connection.on('disconnect', () => {
    console.log('Disconnected from DB');
  });

mongoose.connection.on('error', (err) => {
  console.log('Mongoose Connection Error: ', err)
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
  return next();
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use('/', todoRouter); 

app.use('/user', userRouter);

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
  console.log(errorObj.log);
  res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});