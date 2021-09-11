var readlineSync = require('readline-sync');

var score=0;
console.log("Hi!, Welcome to the Cricket Fantasy Quiz by Somanshu")
console.log("-----------------------------------------------------")
function QnA(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Yay!, your answer is right")
    score = score+1;
  }
  else{
    console.log("Oops!, your answer is not right")
  }

  console.log("Your Current Score is: ", score);
  console.log("---------------------");
}

var questions =[{
  question:"In which Year did team India won their first World Cup Trophy? ",
  answer:"1983"
},{
  question:"Who was the captain of the 1983 world cup winning team? ",
  answer:"kapil dev"
}, {
  question:"When did India win their first T20 Wolrd Cup Trophy? ",
  answer:"2007"
}, {
  question:"Who was the captain of the 2007 T20 world cup winning team? ",
  answer:"ms dhoni"
}, {
  question:"In which year was the Inaugral IPL held? ",
  answer:"2008"
}
];

for (var i=0; i<questions.length; i++){
  var currentQuestion=questions[i];
  QnA(currentQuestion.question, currentQuestion.answer);
}

if(score == 5){
  console.log("Great! You know me pretty well about our Indian Cricket Team ")
} else if(score ==4){
  console.log("Great! You know me pretty well about our Indian Cricket Team")
}
else if(score ==3){
  console.log("Nice!, You somewhat know about our Indian Cricket Team")
}
else if(score ==2){
  console.log("Oh! This score indicates that may be you like some other sport ")
}
else{
  console.log("Oh! This score indicates that may be you like some other sport")
}