const macro = () => {

  const $rows = document.querySelectorAll("#list-view-id > li");

  if (!$rows.length) {
      return;
  }

  alert('ggkdl wodrn')
  $rows.forEach(item => {
      alert(item.innerText);
      // sendTelegramMessage();
  });

};


chrome.tabs.executeScript({
  }, function(result) {
      macro();
  }
);
