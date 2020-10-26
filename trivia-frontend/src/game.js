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
            this.play()
        }.bind(this))
    }

    play() {
        let playing = true
        let questions = Question.all
        
        Question.shuffleQuestions()
        while (playing) {
            for (let question of questions) {
                let response

                question.shuffleAnswers()
                response = this.askQuestion(question)
                if (response.correct) {
                    // add one to score, continue to next question
                } else {
                    // tell user they lose and show them the hi scores
                    // prompt to play again
                }

            }
            playing = false
        }
    }

    askQuestion(question) {
        this.renderQuestion(question)
        for (let answer of question.answers) {
            this.renderAnswer(answer)
        }
    }

    renderHiScores() {

    }

    renderQuestion(question) {
        const questionContent = questionContainer.querySelector('#question_content')
        
        questionContainer.setAttribute('class', 'show')
        questionContent.innerHTML = question.content 
    }

    renderAnswer(answer) {
        const answersDiv = questionContainer.querySelector('#answers')
        const answerDiv = document.createElement('div')

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