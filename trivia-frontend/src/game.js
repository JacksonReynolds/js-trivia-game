class Game {
    constructor(user) {
        this.user = user
    }

    renderWelcome() {
        const startBtn = welcome.querySelector('#go')

        welcome.setAttribute('class', 'show')
        startBtn.addEventListener('click', this.startGame.bind(this))
    }

    hideWelcome() {
        welcome.setAttribute('class', 'hide')
    }

    startGame(e) {
        e.preventDefault()
        this.hideWelcome()
        Question.shuffleQuestions()
        Question.renderQuestions()
        this.listenForSubmits()
    }

    listenForSubmits() {
        const answerForms = document.querySelectorAll('#answer-form')

        for (const form of answerForms) {
            form.addEventListener('submit', this.evaluateAnswer.bind(this))
        }
    }

    evaluateAnswer(e) {
        const form = e.target
        const formRadios = form.querySelectorAll('#radio')

        e.preventDefault()
        for (let radio of formRadios) {
            if (!!radio.checked) {
                let answer = Answer.all.find(a => a.id === radio.value)
                if (answer.correct) {
                    debugger
                    console.log("woot")
                    // hide this question
                    // show next
                    // add point to user score
                } else {
                    console.log("pooop")
                    // end game
                }
            }
        }
    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}