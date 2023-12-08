import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PORT, DB_URL } from './config/constants.js';
import connectDB from './db/connection.js';

const app = express();

// app setup 

app.use(express.static('public'));
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.set('view engine', 'ejs');
 
// third party middelwares
app.use(cors())
app.use(morgan('dev'));



// all routes are come here

import allroutes from './routes/allroutes.js';

app.use(allroutes)


function init() {
  connectDB(DB_URL).then((conn) => {
    console.log(`MongoDB connected !! DB HOST: ${conn.connection.host}`);
    app.listen(PORT , () => {
      console.log(`Server is Listen On PORT : ${PORT}`)
    })
  }).catch((err) => {
    console.log(err)
    process.exit(1)
  })
}

init();

