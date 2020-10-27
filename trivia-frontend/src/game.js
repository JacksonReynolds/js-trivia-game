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
        let questions = Question.all
        
        Question.shuffleQuestions()
        let i = 0
        while (this.notOver(i)) {
            this.askQuestion(quesiton[i])
            i++

            if (i < questions.length) {
                questions[i].shuffleAnswers()
                this.askQuestion(question[i])
            }

            
            
        }
    }

    notOver(i) {
        return i < Question.all.length && this.user.alive
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