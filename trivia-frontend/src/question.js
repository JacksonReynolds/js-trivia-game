class Question {
    constructor(question) {
        this.id = question.id
        this.content = question.attributes.content
        this.answers = []
        Question.all.push(this)
    }

    static all = []

    shuffleAnswers() {
        let currentIndex = this.answers.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = this.answers[currentIndex]
          this.answers[currentIndex] = this.answers[randomIndex]
          this.answers[randomIndex] = temporaryValue
        }
    }

    static loadQuestions() {
        fetch('http://localhost:3000/questions')
            .then(resp => resp.json())
            .then(questions => {
                Question.createQuestions(questions.data)
            })
    }

    static shuffleQuestions() {
        let currentIndex = this.all.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex -= 1
          temporaryValue = this.all[currentIndex]
          this.all[currentIndex] = this.all[randomIndex]
          this.all[randomIndex] = temporaryValue
        }
    }

    static createQuestions(questions) {
        for (let question of questions) {
            let q = new Question(question)
            for (let answer of question.attributes.answers) {
                let a = new Answer(answer)
                q.answers.push(a)
            }
        }
    }

    // game stuff

    static renderQuestions() {
        for (let i = 0; i < this.all.length; i++) {
            this.all[i].createQuestionDiv(i)
            this.all[i].renderAnswers()
        }
    }

    createQuestionDiv(i) {
        const questionDiv = questionContainer.appendChild(document.createElement('div'))
        const questionContentP = questionDiv.appendChild(document.createElement('p'))

        if (i === 1) {
            questionDiv.setAttribute('class', 'show')
        } else {
            questionDiv.setAttribute('class', 'hide')
        }
        questionDiv.setAttribute('id', `question-${this.id}`)
        questionContentP.innerText += this.content
    }

    renderAnswers() {
        const answersForm = questionContainer.querySelector(`#question-${this.id}`).appendChild(document.createElement('form'))

        for (let answer of this.answers) {
            answersForm.innerHTML += `<input type="radio" id="answer${answer.id}" value="${answer.id}"><label>${answer.content}</label>`
        }
    }
}