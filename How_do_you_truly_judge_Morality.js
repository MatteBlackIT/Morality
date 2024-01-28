const input = require('readline-sync');
const fs = require('fs');





// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";         
let tryAgain = "Sorry Cadet, not this time.";

candidateAnswer = "";

//TODO: Variables for Part 2
let questions = ["1) You are an eyewitness to a crime:\nA man has robbed a bank, but instead of keeping the money for himself, he donates it to a poor orphanage\nthat can now afford to feed, clothe, and care for its children.\nYou know who committed the crime. If you go to the authorities with the information, there's a good chance the money will be returned to the bank,\nleaving a lot of kids in need.\n\tWhat do you do?\n", "\n2) You're involved in a two-car crash on your way to work one morning in which you accidentally hit and kill a pedestrian.\nAs you get out of the car, you are intercepted by a tearful woman who seems to think that she hit and killed the pedestrian.\nYou're not sure why she thinks she hit the person, but she is convinced. There's only you, the woman, and the person you hit on the road; there are no witnesses.\nYou know that whoever is deemed responsible will probably be sent to jail.\n\tWhat do you do?\n", "\n3) You and your son are prisoners at a concentration camp.\nYou son tried to escape but was recaptured and sentenced to hang at the gallows.\nTo send a message to all others who may try to escape, the guard orders you to pull the chair out from under your son;\nif you refuse, the guard will kill your son and another innocent person in the camp.\n\tWhat do you do?\n", "\n4) You are a doctor at a top hospital.\nYou have six gravely ill patients, five of whom are in urgent need of organ transplants.\nYou can't help them, though, because there are no available organs that can be used to save their lives.\nThe sixth patient, however, will die without a particular medicine. If s/he dies, you will be able to save\nthe other five patients by using the organs of patient 6, who is an organ donor.\n\tWhat do you do?\n", "\n5) There are two kinds of eggs available at the supermarket. The free-range hens' eggs are $5 a dozen, and the eggs of hens kept in coops are $3 a dozen.\nWhat is more important to you: the hens' living conditions or the $2 savings?\n"];
let correctAnswers = ["A fascinating answer you have returned.", "true", "40", "Trajectory", "3" ];
let candidateAnswers = [];     
let tryAgainMessage = [];


tryAgainMessage.push(tryAgainMessage);
   

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Welcome curious one! Tell me, What is your name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
console.log(`\nSubject: ${candidateName}\n`);

for (let i = 0; i < questions.length; i++){
  
    // if (candidateAnswer === "") {
        // console.log("*eyeroll*")
    // } else {
        // console.log("\n'hm...'")
    
  candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);
}

}
console.log(`${candidateName}`);





function gradeQuiz(candidateAnswers) {

let numOfQuizQuests = questions.length
  if (numOfQuizQuests === questions.length) {
    doorStatus = "DOOR UNLOCKED";
  } else {
    doorStatus = "DOOR LOCKED";
    console.log(`Oh ${candidateName} did you think I would notice that you left some blank? You have chosen a Neutral alignment.\nThat doesn't unlock doors.`)
  }

 
  if (doorStatus === "DOOR UNLOCKED") {
    console.log(`\nWell, you have quite the moral compass, curious ${candidateName}!\nWhether you answered the questions or not, you still answered all my questions.\n\tOr do you?\n\nWho am I to tell you how to interact with the world?\nPonder your answers and decide whether you can to truly live with your answers.\n\nThe door is unlocked. You are free to go.\n`)

  }
  

    
  }


function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`\nNice to meet you, curious ${candidateName}. I would tell you who I am but, who I am doesn't matter.\nThe questions you answer and how you answer them are what matter. The door is locked and the only way out is to answer these questions!\nSo, lets get started!\n`);
  input.question("Type 'Ready' to continue\n ");
    // console.log("\nAs if you had a choice...\n\n :)")
//    console.log(`\nNice to meet you, Cadet ${candidateName}. Names Rex. I am commander of the 501st under General Anakin Skywalker.\nAlright, now that introductions are out of the way, let's get to the quiz, shall we?\nAlright, here is your paper. Good luck soldier!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);

  const data = `Candidate Name: ${candidateName}\nAnswers: ${candidateAnswers.join('\n')}`;
fs.writeFileSync(`YourMoralityTest.txt`, data);
}


// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};