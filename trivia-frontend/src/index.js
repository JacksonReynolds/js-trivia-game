const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')

userForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const user = User.addUser.call(this)
    const newGame = new Game(user)
    newGame.toggleUserForm()
    newGame.play()
})