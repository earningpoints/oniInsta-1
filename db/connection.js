import mongoose from 'mongoose';


export default function connectDB(DB_URL){
  if(DB_URL && typeof DB_URL === 'string'){
    return mongoose.connect(DB_URL, {
      /* Here Comes mongoose connection Options */
      // connectTimeoutMS : 3000
    });
  }
  throw new Error('Database URL Not Found !')
}