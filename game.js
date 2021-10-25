const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progress-text')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressbarfull')

let currentQuestion = {}
//Allows to computer to accept answers
let acceptingAnswers = true
//Sets score to 0 
let scorer = 0
//Sets available questions to 0
let questionCounter = 0
let availableQuestions = []

