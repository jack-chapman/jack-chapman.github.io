var textEl = document.getElementById('changer');

function changeTitleText() {
    var alts = [
        'Hello',
        'Hi',
        'Yo',
        'Howdy',
        'Sup'
    ];
    textEl.textContent = alts[Math.floor(Math.random() * alts.length)];
    $(textEl).fadeIn();
}

function fades() {
    $(textEl).fadeOut('fast', changeTitleText);
}

setInterval(fades, 4 * 1000);