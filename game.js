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

//Question list to be randomized 
let questions = [
    {
        question: 'What is the smallest country in the world?',
        choice1: 'Monaco',
        choice2: 'San Marino',
        choice3: 'Vatican City',
        choice4: 'Malta',
        answer: 3,
    },
    {
        question: 'What is the longest river in the world?',
        choice1: 'Nile',
        choice2: 'Amazon River',
        choice3: 'Yangtze',
        choice4: 'None Of The Above',
        answer: 1,
    },
    {
        question: 'What colour is a giraffes tongue?',
        choice1: 'Red',
        choice2: 'Blue',
        choice3: 'Purple',
        choice4: 'Green',
        answer: 2,
    },
    {
        question: 'How many teeth does the average adult human have?',
        choice1: '28',
        choice2: '30',
        choice3: '26',
        choice4: '32',
        answer: 4,
    }
]

//Score multiplyer
const SCORE_POINTS = 1000
