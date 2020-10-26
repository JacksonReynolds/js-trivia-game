class Game {
    constructor(user) {
        this.user = user
    }

    renderWelcome() {
        const startBtn = welcome.querySelector('#go')

        welcome.setAttribute('class', 'show')
        startBtn.addEventListener('click', function(e) {
            e.preventDefault()
            this.play()
        }.bind(this))
    }

    play() {
        let playing = true
        let questions = Question.loadQuestions()
        while (playing) {
            for (let question of questions) {
                renderQuestion(question)
            }
        }
    }

    renderQuestion(question) {

    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}