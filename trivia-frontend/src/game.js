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
            this.renderQuestions()
        }.bind(this))
    }

    askQuestion(question) {
        const answersForm = questionContainer.querySelector('#answers')

        question.shuffleAnswers()
        this.renderQuestion(question)
        this.renderAnswers(question.answers)

        answersForm.addEventListener('submit', (e) => {
            e.preventDefault()

        })
    }

    renderQuestions() {
        for (let i = 0; i < Question.all.length; i++) {
            this.createQuestionDiv(Question.all[i], i)
        }
    }

    createQuestionDiv(question, i) {
        const questionDiv = questionContainer.appendChild(document.createElement('div'))
        const questionContentP = questionDiv.appendChild(document.createElement('p'))

        if (i === 1) {
            questionDiv.setAttribute('class', 'show')
        } else {
            questionDiv.setAttribute('class', 'hide')
        }
        questionDiv.setAttribute('id', `question-${question.id}`)
        questionContentP.innerTExt += question.content
        question.shuffleAnswers()
        // render answers

    }

    renderAnswer(answer) {
        const answersForm = questionContainer.querySelector('#answers')

        // answersDiv.innerHTML = ''

        answerDiv.setAttribute('class', 'answer')
        answerDiv.innerText = answer.content

        answersDiv.appendChild(answerDiv)
    }

    evaluateAnswer() {

    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}