const sendTelegramMessage = () => {
    const botToken = localStorage.getItem('HEY_FIND_ITEM::bot-token');
    const chatId = localStorage.getItem('HEY_FIND_ITEM::chat-id');

    if (!botToken || !chatId) {
        return;
    }

    const msg = encodeURI('코슷코 가자!!');
    const url = `https://api.telegram.org/bot${botToken}/sendmessage?chat_id=${chatId}&text=${msg}`;

    fetch(url);
}

chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    if (message && message.type == 'successTicketing') {
        sendTelegramMessage();
        sendResponse(true);
    }
});
