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
                    console.log("woot")
                    this.switchQuestionDivs(form)
                    // this.updateUserPoints()
                } else {
                    alert("YOU FUCKED UP")
                    // end game
                }
            }
        }
    }

    switchQuestionDivs(form) {
        this.hideCurrentQuestionDiv(form)
        this.showNextQuestionDiv(form)
    }

    hideCurrentQuestionDiv(form) {
        const currentQuestionDiv = form.parentElement

        currentQuestionDiv.setAttribute('class', 'hide')
    }

    showNextQuestionDiv(form) {
        const nextQuestionDiv = questionContainer.querySelector(`#question-${Question.all[this.indexOfCurrentQuestion(form)+1].id}-div`)

        nextQuestionDiv.setAttribute('class', 'show')
    }

    indexOfCurrentQuestion(form) {
        return Question.all.indexOf(this.currentQuestion(form))
    }

    currentQuestion(form) {
        return Question.all.find(q => form.parentElement.getAttribute('id') === `question-${q.id}-div`)
    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}