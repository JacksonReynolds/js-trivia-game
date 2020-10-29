// divs
const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')
const questionContainer = document.getElementById('question_container')
const welcome = document.getElementById('welcome')
const scoreCardDiv = document.querySelector("#score_card")
const endGameDiv = document.querySelector('#end_of_game_message')
const hiscoresDiv = document.querySelector('#hiscores')
const gameWindow = document.getElementById('game_window')

// buttons/forms
const startBtn = welcome.querySelector('#go')
const restartBtn = hiscoresDiv.querySelector('#start_over')
const hiscoresBtn = endGameDiv.querySelector('#to_hiscores')



// initialize game
let newGame = new Game

// listen for button clicks and form submissions
User.listenForUserSubmit(newGame)
newGame.listenForStart()
// newGame.listenForSubmits()
newGame.listenForHiscores()
newGame.listenForRestart()
