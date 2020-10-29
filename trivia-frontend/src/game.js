class Game {
    constructor() {
        Question.loadQuestions.call(this)
        // Question.renderQuestions()
    }
    
    set user(user) {
        this._user = user
    }

    get user() {
        return this._user
    }


    /////
    renderWelcome() {
        welcome.setAttribute('class', 'show')
    }

    toggleWelcome() {
        welcome.getAttribute('class') === 'show' ? welcome.setAttribute('class', 'hide') : welcome.setAttribute('class', 'show')
    }

    toggleGameWindow() {
        gameWindow.getAttribute('class') === 'show' ? gameWindow.setAttribute('class', 'hide') : gameWindow.setAttribute('class', 'show')
    }

    listenForStart() {
        startBtn.addEventListener('click', this.startGame.bind(this))
    }

    hideWelcome() {
        welcome.setAttribute('class', 'hide')
    }

    startGame(e) {
        e.preventDefault()
        this.toggleWelcome()
        Question.shuffleQuestions()
        for (const question of Question.all) {
            question.shuffleAnswers()
        }
        this.showFirstQuestion()
        Question.toggleQuestionContainer()
    }

    showFirstQuestion() {
        const firstQuestion = Question.all[0]
        const qDivs = questionContainer.querySelectorAll('div')

        for (let div of qDivs) {
            if (div.getAttribute('id') === `question-${firstQuestion.id}-div`) {
                div.setAttribute('class', 'show')
            }
        }
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
                form.reset()
                if (answer.correct) {
                    this.user.score += this.currentQuestion().difficulty
                    this.user.updateScoreCard()
                    if (this.indexOfCurrentQuestion() === Question.all.length-1) {
                        this.endGame()
                    } else {this.switchQuestionDivs()}
                } else {
                    this.endGame()
                }
            }
        }
    }

    updateUserHiscore() {
        let score = this.user.score
        let user = {user: {score}}
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
                this.user.score = user.data.attributes.hiscore
            })
    }
    

    switchQuestionDivs() {
        let i = this.indexOfCurrentQuestion() // grab before hiding the current question div

        this.hideCurrentQuestionDiv()
        this.showNextQuestionDiv(i)
    }

    hideCurrentQuestionDiv() {
        this.currentQuestionDiv().setAttribute('class', 'hide')
    }

    showNextQuestionDiv(lastIndex) {
        const nextQuestionDiv = questionContainer.querySelector(`#question-${Question.all[lastIndex+1].id}-div`)

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

    endGame() {
        this.updateUserHiscore()
        this.hideCurrentQuestionDiv()
        this.toggleGameWindow()
        Question.toggleQuestionContainer()
        this.toggleEndOfGameMessage()
    }

    toggleEndOfGameMessage() {
        endGameDiv.getAttribute('class') === 'hide' ? endGameDiv.setAttribute('class', 'show') : endGameDiv.setAttribute('class', 'hide')
    }

    // event listeners

    listenForHiscores() {
        hiscoresBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.user.toggleScoreCard()
            this.toggleEndOfGameMessage()
            User.getHiscores()
        })
    }

    listenForRestart() {
        restartBtn.addEventListener('click', (e) => {
            e.preventDefault()
            User.toggleHiscores()
            User.clearHiscores()
            User.toggleUserForm()
        })
    }
}