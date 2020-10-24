const userFormContainer = document.getElementById("user_form_container")
const userForm = userFormContainer.querySelector('#user_form')

userForm.addEventListener('submit', User.addUser)