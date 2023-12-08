import crypto from 'crypto';

function randomID(){
  return crypto.randomUUID().substr(0,8)
}

export {
  randomID
}