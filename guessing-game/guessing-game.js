//this is JOHN GRILLO's week 1, class 2 assignment
//John Grillo's guessing game
//the 3 questions are based on Monty Python's 'In Quest for the Holy Grail'

alert("Hello world! And welcome to the John Grillo (JAG) Guessing game. 3 questions, 3 tries. The prize is the sweet smell of success. Let's play.");

var answerCount = 0;
var questAnswer = "To pimp strong and proper";
var questQuestion = prompt("What is John Grillo's quest?");
if(questQuestion.toLowerCase().indexOf("pimp") >= 0) {
  alert("Hey, you got it right! JAG's quest is " + questAnswer);

  answerCount +=1;
}  else {
   alert("BZZZT! Wrong answer! Let's move on!")

}

var celebrityAnswer = "Cmdr. Riker from 'Star Trek: The Next Generation'";
var celebrityQuestion = prompt("What celebrity does John Grillo accused of looking like?");

if(celebrityQuestion.toLowerCase().indexOf("riker") >=0 ) {
  alert("Hey, you got it right! JAG's answer is " + celebrityAnswer);
  answerCount +=1;

} else {
  alert("BZZZT! Wrong answer! Let's move on!")
}

var passAnswer = "Oh really? Let's tally up that score";
var passQuestion = prompt("So, did you get the first two questions right?");
if(passQuestion.toLowerCase().indexOf("yes") >=0) {
  alert("Hey, you got it right! JAG's answer is " + passAnswer);
  answerCount +=1;
} else {
  alert("BZZZT! Wrong answer! Let's move on!")
}

if(answerCount == 3) {
  alert("bingo! You got all 3 right! buy yourself a milkshake")
} else if (answerCount == 2) {
  alert("Meh; At 2 pts I wouldn't write home about it");
}
else {
  alert("I won't tell anyone if you don't...");
}
