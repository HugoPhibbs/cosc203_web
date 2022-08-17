console.log("Hello world!");

let bot_messages = [];
bot_messages[0] = "How's Antarctica?";
bot_messages[1] = "Wanna get some sushi later? 🍣😋";
bot_messages[2] = "I 🐳 always be here for you.";
bot_messages[3] = "Noot noot 🐧";
bot_messages[4] = "There's plenty of 🐟 in the 🌊 but I like you best ❤️";

let chatHistory = [];

function addMessage(msg, type) {
  chatHistory.push({
    type: type,
    msg: msg,
  });

  const encodedData = encodeURIComponent(JSON.stringify(chatHistory));
  localStorage.setItem("chatHistory", encodedData);
}

// if chat history exists in local storage
if (localStorage.getItem("chatHistory") !== null) {
  // retrieve the data
  const encodedData = localStorage.getItem("chatHistory");

  // decode the data into an array
  const savedMessages = JSON.parse(decodeURIComponent(encodedData));

  // this is a for each loop (in the functional paradigm)
  savedMessages.forEach((message) => {
    deliverMessage(message.msg, message.type)
  });
}

function sendMessage(eventData) {
  console.log("event happened!");
  console.log(eventData);

  const input = document.getElementById("message-text")
  const msg = input.value;
  input.value = "";

  const type = "message-self"
  addMessage(msg, type);
  deliverMessage(msg, type)
  setTimeout(receiveMessage,  1000);

  // KEEP THIS. It prevents the page from reloading
  eventData.preventDefault();
}

function receiveMessage() {
  const randNum = Math.floor(Math.random() * bot_messages.length);
  const msg = bot_messages[randNum];
  const type = "message-other"
  addMessage(msg, type);
  deliverMessage(msg, type)
}

function addDateDiv(msgBox) {
  const date = new Date();
  const dateDiv = document.createElement("p");
  dateDiv.setAttribute("class", "timestamp");
  dateDiv.textContent = `${date.getHours()}:${date.getMinutes()}`;
  msgBox.appendChild(dateDiv);
}

function deliverMessage(msg, type) {
  const msgContent = document.createElement("p");
  msgContent.textContent = msg;

  const msgBox = document.createElement("div");
  msgBox.setAttribute("class", type);
  msgBox.appendChild(msgContent);

  const msgContainer = document.getElementById("chat-log-container");
  msgContainer.appendChild(msgBox);

  addDateDiv(msgBox);
}

const btn = document.getElementById("message-button");
btn.addEventListener("click", sendMessage);

setInterval(receiveMessage, 5000);

function clearChatHistory() {
  chatHistory = [];
  localStorage.removeItem("chatHistory");
  document.querySelector('#chat-log-container').innerHTML = "";
}

//clearChatHistory()