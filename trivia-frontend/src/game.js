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
            this.play()
        }.bind(this))
    }

    play() {
        let i = 0
        while (this.stillPlaying(i)) {
            this.askQuestion(Question.all[i])
            i++
        }
    }

    stillPlaying(i) {
        return i < Question.all.length && this.user.alive
    }

    askQuestion(question) {
        const answersForm = questionContainer.querySelector('#answers')

        question.shuffleAnswers()
        this.renderQuestion(question)
        this.renderAnswers(question.answers)
    }

    renderHiScores() {

    }

    renderQuestion(question) {
        const questionContent = questionContainer.querySelector('#question_content')
        
        questionContainer.setAttribute('class', 'show')
        questionContent.innerHTML = question.content 
    }

    renderAnswer(answer) {
        const answersForm = questionContainer.querySelector('#answers')

        // answersDiv.innerHTML = ''

        answerDiv.setAttribute('class', 'answer')
        answerDiv.innerText = answer.content

        answersDiv.appendChild(answerDiv)
    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}