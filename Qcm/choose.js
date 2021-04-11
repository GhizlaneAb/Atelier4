//Array pour stocker les bonnes reponses
var questions = [{
    question: 0,
    correctAnswer: "q1r1"
}, {
    question: 1,
    correctAnswer: "q2r2"
}, {
    question: 2,
    correctAnswer: "q3r1"
}, {
    question: 3,
    correctAnswer: "q4r2"
}, {
    question: 4,
    correctAnswer: "q5r3"
}];
var tab = [];
var idchoix = [];
var currentQuestion = 0;
var correctAnswers = 0;
var i = 0;
var k = 0;
var c = 0;
$(document).ready(function() {
    $("#quizform").on("submit", function(event) {
        event.preventDefault();
        for (currentQuestion = 0, c = 0; currentQuestion < questions.length, c < questions.length; currentQuestion++, c++) {
            $("input[type='radio']:checked").each(function(i, item) {
                k = i;
                idchoix[i++] = item.id;
                tab[k] = this.name;
            });
            var j;
            if (idchoix[currentQuestion] != questions[c].correctAnswer && tab[currentQuestion] == questions[c].question) {
                j = questions[c].question;
                $("div.card").eq(j).css('color', 'red');
            } else if (tab[currentQuestion] != questions[c].question) {
                j = questions[c].question;
                $("div.card").eq(j).css('color', 'orange');
                currentQuestion--;
            } else if (idchoix[currentQuestion] == questions[c].correctAnswer && tab[currentQuestion] == questions[c].question) {
                j = questions[c].question;
                $("div.card").eq(j).css('color', 'green');
                correctAnswers++;
            }
        }

        displayScore();

    });
});
//fonction pour afficher le score
function displayScore() {
    alert("Votre score: " + correctAnswers + " sur: " + questions.length);

}