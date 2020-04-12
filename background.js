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

    alert('hi');
    const $rows = document.querySelectorAll("#list-view-id > li");
  
      setMessage('ㅅㅣ작 2');
      // if (!$rows.length) {
      //     return;
      // }
  
      $rows.forEach(item => {
          alert('1');
          alert(item.innerText);
          
          // sendTelegramMessage();
      });
  
      // for(let i=0; i <2; i++) {
      //     setMessage($rows.forEach(item => {
      //         console.log(item.innerText)
      //     });)
          
  
      //     if ($rows[i].getElementsByClassName('lister-name')[0].text.includes('KF')) {
      //         setMessage($rows[i].getElementsByClassName('lister-name')[0].text)
      //         sendTelegramMessage();
      //     }
      // }
  };

chrome.extension.onMessage.addListener((message, sender, sendResponse) => {
    if (message && message.type == true) {
        sendTelegramMessage();
        sendResponse(true);
    }
});
