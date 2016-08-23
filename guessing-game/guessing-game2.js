//this is JOHN GRILLO's week 1, class 2 assignment
//John Grillo's guessing game
//the 3 questions are based on Monty Python's 'In Quest for the Holy Grail'

function gameStart() {
  var NULL = null;

  var checkAnswers = localStorage.getItem("gamelog");
  if(checkAnswers == NULL) {
    document.getElementById('record').innerHTML = "Hello world! And welcome to the John Grillo (JAG) Guessing game. \n 3 questions, 3 tries. The prize is the sweet smell of success.\n\n Let's play. LET THE GAMES BEGIN.";
    localStorage.removeItem('gamelog');
    localStorage.setItem('gamelog', '<p>LET THE GAMES BEGIN.</p>');
    localStorage.removeItem('qNumber');
    localStorage.setItem('qNumber', 1);
    localStorage.removeItem('scoreTracker');
    localStorage.setItem('scoreTracker', 0);
  } else {
    document.getElementById('record').innerHTML = checkAnswers;

  }

  var audio = new Audio("victory.wav");
  //to invoke method...
  // audio.play();

// FUNCTIONS DEFINED:
function IsNumeric(input)
{
    return (input - 0) == input && (''+input).trim().length > 0;
}
//brilliant method, wish i had thought of it. Full write up of it can be found here.
//http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric

//this function writes to the screen
function answerlog(input) {
   document.getElementById('record').innerHTML += "<div><p> " + input + " </p></div>";
   localStorage.removeItem('gamelog');
   localStorage.setItem('gamelog', document.getElementById('record').innerHTML);
}



console.log("Telling user that game has begun")
// THIS IS THE FIRST QUESTION BLOCK
if(localStorage.getItem('qNumber') == 1) {
  var answerCount = 0;
  var questAnswer = "\nTo pimp strong and prosper";
  var questQuestion = prompt("What is John Grillo's quest?");
  if(questQuestion.toLowerCase().indexOf("pimp") >= 0) {
    //alert("Hey, you got it right! JAG's quest is " + questAnswer);
    answerlog("Hey, you got it right! JAG's quest is " + questAnswer);
    answerCount += 1;
    console.log("User earned 1 point for correct answer");

  }  else {
     answerlog("BZZZT! Wrong answer! His quest is " + questAnswer);
     console.log("User failed and got nothing.");
  }
  localStorage.removeItem('qNumber')
  localStorage.setItem('qNumber', 2);
//end of QUESTION BLOCK 1
}


// THIS IS THE SECOND QUESTION BLOCK
if(localStorage.getItem('qNumber') == 2) {
  var celebrityAnswer = "Cmdr. Riker from \n'Star Trek: The Next Generation'";
  var celebrityQuestion = prompt("What celebrity is John Grillo accused of looking like?");

  if(celebrityQuestion.toLowerCase().indexOf("riker") >=0 ) {
    answerlog("Hey, you got it right! JAG's answer is \n" + celebrityAnswer);
    answerCount +=1;
    console.log("User earned 1 point for correct answer for second question")

  } else {
    answerlog("BZZZT! Wrong answer! " + celebrityAnswer);
    console.log("User failed and got nothing.");
  }

  localStorage.removeItem('qNumber')
  localStorage.setItem('qNumber', 3);
  //end of QUESTION BLOCK 2
}

// THIS IS THE THIRD QUESTION BLOCK
if(localStorage.getItem('qNumber') == 3) {
  var passAnswer = "Let's tally up that answerCount...";
  var passQuestion = prompt("So, did you get the first two questions right?");
  if(passQuestion.toLowerCase().indexOf("yes") >=0) {
    answerlog("Hey, you got it the freebie. Good on you.");
    answerCount +=1;
    console.log("User earned 1 point for correct answer on question 3")
  } else {
    answerlog("BZZZT! " + passAnswer);
    console.log("User failed and got nothing.");
  }

  localStorage.removeItem('qNumber')
  localStorage.setItem('qNumber', 4);
//end of QUESTION BLOCK 3
}

// // BONUS 4TH QUESTION, for the extra credit assignment.
// var bonusQuestion = prompt("SURPRISE BONUS ROUND! \nAll you have to do is guess a number between 1 and 12, inclusive.");
// if (parseInt(bonusQuestion) == true && bonusQuestion == 1) {
//   answerlog("Very nice! You just got yourself a bonus qustion. \nTHERE CAN BE ONLY ONE!");
//   console.log("User earned bonus point");
//   answerCount +=1;
// } else {
//   answerlog("Sorry, mate! The correct answer is 1!");
//   console.log("User done goofed and got nothing. The answer was 1. The 'inclusive' part was a blatant hint");
// }

// BONUS 5TH QUESTION, for the extra credit assignment. A do-while loop. Why don't they have a do-wop loop?

//var doItAgain = true;
if(localStorage.getItem('qNumber') == 4) {
  var doItAgain = true;
  do {
   var bonusQuestion = parseInt(prompt("SURPRISE! \n To quit this do-while loop you must guess the correct number between 1 and 12."));
   console.log("The loop executes again at line 76");
   if (bonusQuestion == 1 && Number.isInteger(bonusQuestion) == true ) {
     answerlog("You guessed right and can now get your answerCount!");
     console.log("User done broke the do-while loop");
     doItAgain = false;
   }
   else if (isNaN(bonusQuestion)) {
     break;
   }
   else {
     answerlog("Guess again! The answer is not " + bonusQuestion);
     console.log("User done goofed and got nothing. The answer was 1. It goes on forever...");
     doItAgain = true;
   }
  } while ( doItAgain == true );

  localStorage.removeItem('qNumber')
  localStorage.setItem('qNumber', 5);
//end of QUESTION BLOCK 4
}



//AND NOW FOR SCORING.
if(answerCount > 3) {
  answerlog("ABOVE AND BEYOND! YOU WON THE GAME WITH 125%");
  console.log("USER DESTROYED THE GAME WITH 125%");
  audio.play();
} else if (answerCount == 3) {
  answerlog("bingo! You got all 3 right! buy yourself a milkshake");
  console.log("USER WON THE GAME");
  audio.play();
}
 else if (answerCount == 2) {
  answerlog("Meh; At 2 pts I wouldn't write home about it");
  console.log("USER FAILED")
}
else {
  answerlog("You failed. I won't tell anyone if you don't...");
  console.log("USER FAILED HORRIBLY")
}
localStorage.removeItem('gamelog');

//end of game start function and ergo, the game.
}
