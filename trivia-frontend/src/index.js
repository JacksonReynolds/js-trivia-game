const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')
const questionContainer = document.getElementById('question_container')
const welcome = document.getElementById('welcome')

userForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const user = User.addUser.call(this)
    const newGame = new Game(user)
    Question.loadQuestions()
    newGame.toggleUserForm()
    newGame.renderWelcome()
})