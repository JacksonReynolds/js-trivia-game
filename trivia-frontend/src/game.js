class Game {
    constructor(user) {
        this.user = user
    }

    renderWelcome() {
        const startBtn = welcome.querySelector('#go')

        welcome.setAttribute('class', 'show')
        startBtn.addEventListener('click', function(e) {
            debugger
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
                question.shuffleAnswers()
                renderAnswers(question.answers)
            }
        }
    }

    renderHiScores() {

    }

    renderQuestion(question) {
        const questionContent = questionContainer.querySelector('#question_content')

        questionContent.innerText = question.content
    }

    renderAnswers(answers) {
        const answersForm = questionContainer.querySelector('#answers')

        for (let answer of answers) {
            answersForm.innerHTML += `<input type="radio" id="answer-${answer.id}" value="${answer.id}><label for="${answer.id}">${answer.content}</label><br>"`
        }
    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}