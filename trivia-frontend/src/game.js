class Game {
    constructor(user) {
        this.user = user
    }

    play() {
        renderwWelcome()
        renderQuestion()
    }

    renderWelcome() {}

    renderQuestion() {}

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}