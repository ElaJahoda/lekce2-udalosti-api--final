/*-----------------*/
/* FUNKCE TLAČÍTEK */
/*-----------------*/

let tlacitka = document.querySelectorAll('button');
let audio = document.querySelector('#js-audio');
let odstavec = document.querySelector('#js-paragraph')

tlacitka.forEach((tlacitko) => {
    tlacitko.addEventListener('click', mojeFunkce)
});

function mojeFunkce(event) {
    let tlacitko = event.target;
    if(tlacitko.textContent == 'červené po kliknutí') {
        odstavec.classList.toggle('cerveny-text')
    }
    if(tlacitko.textContent == 'větší po kliknutí') {
        zvetsitPismo(odstavec, 1);
    }
    if (tlacitko.textContent == 'Přehraj') {
    console.log('pojedu');
    audio.play();
    }
    if (tlacitko.textContent == 'Pauzni') {
        console.log('stop');
        audio.pause();
        }
    if (tlacitko.dataset.volume) {
        console.log('volume');
        audio.volume = parseFloat(tlacitko.dataset.volume);
        }
    if (tlacitko.textContent == 'Nastav na začátek') {
        console.log('znovu');
        audio.currentTime = 0;
        }
}

function zvetsitPismo(elementSelector, fontSizeChange) {
    let element = elementSelector;
    let currentFontSize = parseInt(element.style.fontSize);
    element.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
}
