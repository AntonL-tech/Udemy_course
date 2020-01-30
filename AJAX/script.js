let inputByn = document.getElementById('byn'),
    inputUsd = document.getElementById('usd');


inputByn.addEventListener('input', () => {
    let request = new XMLHttpRequest();


    // request.open(method, url, async, login, pass);

    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // status
    // statusText
    // responseText / response  (ответ от сервера)
    // readyState 

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = (inputByn.value / data.usd).toFixed(2);
        } else {
            inputUsd.value = 'Ooops something wrong...';
        }

    });

});