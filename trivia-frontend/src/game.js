class Game {
    constructor(user) {
        this.user = user
    }

    play() {
        let playing = true
        const questions = Question.loadQuestions()
        while (playing) {

        }
    }

    renderWelcome() {}

    renderQuestion() {}

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}