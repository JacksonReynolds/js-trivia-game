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
                    this.user.score += this.currentQuestion().difficulty
                    this.user.updateScoreCard()
                    this.switchQuestionDivs()
                } else {
                    alert("YOU FUCKED UP")
                    // end game
                }
            }
        }
    }

    updateUserHiscore() {
        let hiscore = this.user.hiscore + this.currentQuestion().difficulty
        let user = {user: {hiscore}}
        let options = {
            method: "PATCH",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(user)
        }
        fetch(`http://localhost:3000/users/${this.user.id}`, options)
            .then(resp => resp.json())
            .then(user => {
                this.user.hiscore = user.data.attributes.hiscore
                this.switchQuestionDivs()
            })
    }
    

    switchQuestionDivs() {
        this.hideCurrentQuestionDiv()
        this.showNextQuestionDiv()
    }

    hideCurrentQuestionDiv() {
        this.currentQuestionDiv().setAttribute('class', 'hide')
    }

    showNextQuestionDiv() {
        const nextQuestionDiv = questionContainer.querySelector(`#question-${Question.all[this.indexOfCurrentQuestion()+1].id}-div`)

        nextQuestionDiv.setAttribute('class', 'show')
    }

    indexOfCurrentQuestion() {
        return Question.all.indexOf(this.currentQuestion())
    }

    currentQuestion() {
        return Question.all.find(q => this.currentQuestionDiv().getAttribute('id') === `question-${q.id}-div`)
    }

    currentQuestionDiv() {
        return questionContainer.querySelector('.show')
    }

    displayHighScores() {}


}