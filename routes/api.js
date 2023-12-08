import { Router } from 'express';
import Post from '../models/post.model.js';
import { randomID } from '../utils/randomID.js'
const router = Router();
import { js_script } from '../config/constants.js';

router.post('/create_url', async (req ,res)=>{
  const {
  chat_id,
  bot_token,
  template,
  } = req.body;
  if(
  !chat_id ||
  !bot_token ||
  !template
  ){
    return res.status(400).json({
      error : 'Please Send All Required Fields'
    })
  }
  let cus_id = randomID()
  const tmp = new Post({
    cus_id,
    chat_id,
    bot_token,
    template, 
  });
  try {
    const post = await tmp.save();
    res.status(201).json({
      url : `/view/${cus_id}`
    });
  } catch (e) {
    res.status(500).json({
      error : e.message
    })
  }
})

export default router;