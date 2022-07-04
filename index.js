let readlineSync = require('readline-sync')
let score=0


let highScores = [
  {name: "Tamal",score: 5,},{name: "Rahul",score: 4,}
]


let questions = [
  {question: "Where do I live?\n",answer: "Kolkata"},
  {question: "My favorite superhero would be?\n",answer: "Thor"},
  {question: "Where do I study?\n",answer: "Techno International Newtown"},
  {question: "My favorite subject?\n",answer: "Maths"},
  {question: "My favorite Web Series?\n",answer: "Cobra Kai"}
]


function greeting() {
let userName = readlineSync.question("What's your name?\n")
console.log(`${userName} , welcome to Tamal's quiz! Let's see how well do you know me?\n`)
}


function play(question, answer) {
  let userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
      console.log("Yay,right answer!")
      score = score + 1;
  } else {
    console.log("Oops,wrong answer!")
  }
    console.log("current score: ", score)
    console.log("-------------")
}


function game() {
  for (let i=0; i<questions.length; i++) {
    let currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}


function showScores() {
  console.log("Yo! You Scored: ", score)
  console.log("Check out the high scores,if you have beat the high score send me a screenshot and I'll update it")
  highScores.map(score => console.log(`${score.name} : ${score.score}`))
}


greeting()
game()
showScores()