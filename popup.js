(() => {
    const MESSAGE_RESET = '초기화 되었습니다.';
    const MESSAGE_CONNECTION_SUCCESS = '연동되었습니다.';
    const MESSAGE_CONNECTION_FAIL = '연동에 실패하였습니다.<br>입력하신 정보를 다시 확인해주세요.';

    const init = () => {
        document.getElementById('bot-token').value = localStorage.getItem('HEY_FIND_ITEM::bot-token');
        document.getElementById('chat-id').value = localStorage.getItem('HEY_FIND_ITEM::chat-id');
    }

    const save = () => {
        const botToken = document.getElementById('HEY_FIND_ITEM::bot-token').value;
        const chatId = document.getElementById('HEY_FIND_ITEM::chat-id').value;

        const msg = encodeURI('코슷코 탐지기 알림이 연동되었습니다.');
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${msg}`;

        fetch(url).then(response => {
            if (response.status === 200) {
                localStorage.setItem('HEY_FIND_ITEM::bot-token', botToken);
                localStorage.setItem('HEY_FIND_ITEM::chat-id', chatId);
                setMessage(MESSAGE_CONNECTION_SUCCESS);
                on();
            } else {
                setMessage(MESSAGE_CONNECTION_FAIL);
            }
        }).catch(err => {
            setMessage(MESSAGE_CONNECTION_FAIL);
            console.error(err)
        });
    }

    const reset = () => {
        document.getElementById('HEY_FIND_ITEM::bot-token').value = '';
        document.getElementById('HEY_FIND_ITEM::chat-id').value = '';
        localStorage.removeItem('HEY_FIND_ITEM::bot-token');
        localStorage.removeItem('HEY_FIND_ITEM::chat-id');
        setMessage(MESSAGE_RESET);
    }

    const on = () => {
        setMessage('시작되었습니다.');
        localStorage.setItem('HEY_FIND_ITEM::isStart', true);
    }

    const off = () => {
        localStorage.setItem('HEY_FIND_ITEM::isStart', false);
    }

    const setMessage = message => {
        document.getElementById('message').innerHTML = message;
    }

    init();
    document.getElementById('button-save').addEventListener('click', save);
    document.getElementById('button-reset').addEventListener('click', reset);
    document.getElementById('button-on').addEventListener('click', on);
    document.getElementById('button-off').addEventListener('click', off);
})();