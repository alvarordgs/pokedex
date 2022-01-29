let slider = document.getElementById('slider-main')
var card = document.getElementsByClassName('pokemon-card')

function next() {
    slider.append(card[0])
}

function prev() {
    slider.prepend(card[card.length - 1])
}