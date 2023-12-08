async function getChats(token){
  try {
    
  } catch (e) {
    
  }
}

function extractID(data)  {
  if(data.data?.result?.length){
    let id = data.data.result[0]['message']['from']['id'];
    return id;
  }
  return ({
    error : "Chat ID Not Found ! Please Send A Message To Your Bot"
  })
}

export {
  getChat,
  extractID
};