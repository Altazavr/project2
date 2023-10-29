let sick = document.querySelector('.sick-model');
let screenHide = document.querySelector('.hide-model');
let closeBtn = document.querySelector('.close-btn');

//Show 'Here I am'

sick.addEventListener('click', function() {
    screenHide.style.display = 'block';
})

//Tap on 'x' btn and on screen

closeBtn.addEventListener('click', function() {
    screenHide.style.display = 'none';
})

window.addEventListener('click', function(e) {
    if(e.target === screenHide) {
        screenHide.style.display = 'none';
    }
})
