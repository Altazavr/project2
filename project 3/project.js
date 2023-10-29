let questions = document.querySelectorAll('.general-1');
let answers = document.querySelectorAll('.general-2');
let pluses = document.querySelectorAll('.plus');
let minuses = document.querySelectorAll('.minus');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', function() {
        answers[i].classList.toggle('active');
    });
    
    answers[i].addEventListener('click', function() {
        answers[i].classList.remove('active');
    });
}