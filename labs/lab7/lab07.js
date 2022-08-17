// const API_SERVER_URL = 'http://oucs1594mac.student.uod.otago.ac.nz:8080'
const API_SERVER_URL = 'http://localhost:8080'

/* this function reloads ALL messages from the server */
function loadAllMessages() {
    /* TASK 3 */
    
    /* 1: fetch messages.json */

    fetch(`${API_SERVER_URL}/messages.json`).then(
        async (response) => {
            let messages = await response.json()

            /* 2: clear chat-log-container */

            let chatLogContainer = document.getElementById("chat-log-container")
            chatLogContainer.innerHTML = '';

            /* 3: for each message in array */
            /* create each message element */

            for (let message of messages) {
                let messageClass = "message-other"
                if (message.name === userName) {
                    messageClass = "message-self"
                }
                createMessageElement(messageClass, message.name, message.message, message.time)
            }
        }
    ).catch((error) => console.log(error));



}
/* reload messages every 2 seconds */
setInterval(function() {
    loadAllMessages();
}, 2000);



/* this function sends a new message to the server */
async function submitNewMessage() {
    if (userName == "") return; // if no userName, stop

    /* get input form data */
    const msgInput = document.querySelector('#message-text');
    if (msgInput.value == "") return; // if no message, stop
    const message = msgInput.value;
    msgInput.value = ""; // clear the input form

    const time = new Date().getTime()

    /* create local message element on the page */
    createMessageElement(
        "message-self",
        userName,
        message,
        time
    );

    /* TASK 4: POST messageData to the server */

    const messageData = {
        "name": userName,
        "message": message,
        "time": time
    }

    const fetchOptions = {
        method: 'POST',
        body: JSON.stringify(messageData), // JSON serialized as a string
        headers: { 'Content-Type': 'application/json' }
    }

    const url = `${API_SERVER_URL}/send-message`

    fetch(url, fetchOptions).then(
        (response) => {
            console.log(response)
        }
    ).catch((error) => console.log(error));

}
/* form submission event handler */
function clickHandler(event) {
    event.preventDefault();
    submitNewMessage();
}
document.querySelector("#message-button").addEventListener('click', clickHandler);



let userName = ""
/* whenever the user types their name, change emoji, save name in localStorage */
document.querySelector("#message-name").addEventListener('input', function() {
    const name = document.querySelector("#message-name").value;
    document.querySelector("p.my-img").textContent = emojiFromName(name);
    userName = name;
    localStorage.setItem("userName", userName);
});
/* on page load, get userName from localStorage */
if(localStorage.getItem("userName") !== null) {
    userName = localStorage.getItem("userName");
    document.querySelector("#message-name").value = userName;
    document.querySelector("p.my-img").textContent = emojiFromName(userName);
}