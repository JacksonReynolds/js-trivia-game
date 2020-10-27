class Game {
    constructor(user) {
        this.user = user
    }

    renderWelcome() {
        const startBtn = welcome.querySelector('#go')

        welcome.setAttribute('class', 'show')
        startBtn.addEventListener('click', function(e) {
            e.preventDefault()
            welcome.setAttribute('class', 'hide')
            Question.shuffleQuestions()
            Question.renderQuestions()
            this.listenForSubmits()
        }.bind(this))
    }

    listenForSubmits() {
        const answerForms = document.querySelectorAll('#answer-form')

        for (const form of answerForms) {
            form.addEventListener('submit', (e) => {
                e.preventDefault()
                const questionDiv = form.parentElement
    
                for (let radio of form.elements) {
                    if (!!radio.checked) {
                        let answer = this.answers.find(a => a.id === radio.value)
                        if (answer.correct) {
                            this.hideCurrentQuestion()
                            this.showNextQuestion()
                        } else {console.log("pooop")}
                    }
                }
            })
        }
    }

    evaluateAnswer() {

    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}