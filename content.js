let uid = 1;
const MAIN_URI = "https://www.costco.co.kr/search/?text=kf94";

const setEscapeEvent = () => {
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      macroStop();
    }
  });
};


const macroStop = () => {
  alert("매크로를 종료합니다.");
  localStorage.removeItem("macro");
  reload();
};

const macro = () => {
  let $rows = document.querySelectorAll("#list-view-id > li");

  if (!$rows.length) {
    return;
  }

  for (let i in $rows) {
    if($rows.item(i).getElementsByClassName('lister-name')[0].text(KF)) {
      console.log($rows.item(i).getElementsByClassName('lister-name')[0].text);
      sendTelegramMessage();
    }
  }

  setTimeout(location.reload(), 3000);
};

(() => {
  const isStarted = localStorage.getItem("HEY_FIND_ITEM::isStart") == true;

  if (isStarted) macro();
})();
