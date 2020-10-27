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
        }.bind(this))
    }

    renderQuestions() {
        for (const question of Question.all) {
            question.createQuestionDiv(Question.all.indexOf(question))
            question.renderAnswers()
        }
        this.listenForSubmits()
    }

    listenForSubmits() {

    }

    evaluateAnswer() {

    }

    displayHighScores() {}

    updateScore() {}

    toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }


}