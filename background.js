const sendTelegramMessage = () => {
    alert('a');
    const botToken = localStorage.getItem('bot-token');
    const chatId = localStorage.getItem('chat-id');

    if (!botToken || !chatId) {
        return;
    }

    const msg = encodeURI('코슷코 가자!!');
    const url = `https://api.telegram.org/bot${botToken}/sendmessage?chat_id=${chatId}&text=${msg}`;

    fetch(url);
}

const macro = () => {

    const $rows = document.querySelectorAll("#list-view-id > li");
  
    if (!$rows.length) {
        return;
    }
  
    $rows.forEach(item => {
        alert(item.innerText);
        sendTelegramMessage();
    });
  
  };

chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    if (message && message.type == true) {
        sendTelegramMessage();
        sendResponse(true);
    }
});
