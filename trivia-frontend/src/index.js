const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')
const questionContainer = document.getElementById('question_container')
const welcome = document.getElementById('welcome')

userForm.addEventListener('submit', function(e) {
    e.preventDefault()
    User.addUser.call(this)
})