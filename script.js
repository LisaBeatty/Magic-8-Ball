$(document).ready(function(){
var magic8Ball ={};
magic8Ball.listOfAnswers = ["Yes", "Oui", "You got it dude", "Without a doubt", "Most likely", "Better not tell you now", "Please ask again later", "Ummmmm", "No", "Non", "Aww hell no", "My sources say no"];
$("#answer").hide();
magic8Ball.askQuestion = function(question) {
$("#answer").fadeIn(4000);
var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer = this.listOfAnswers[randomIndex];
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
$("#answer").text( answer );
console.log(question);
console.log(answer);
};
$("#answer").hide();

$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a yes or no question");
           magic8Ball.askQuestion(question);
       }, 500);
	$("#8ball").effect( "shake" );
});
