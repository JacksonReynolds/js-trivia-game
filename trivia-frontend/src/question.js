class Question {
    constructor(question) {
        this.id = question.id
        this.content = question.attributes.content
        this.difficulty = question.attributes.difficulty
        this.answers = []
        Question.all.push(this)
    }

    static all = []

    // pregame setup

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
                Question.renderQuestions()
                this.listenForSubmits()
                // this.listenForHints()
            })
            .catch(error => Question.serverError(error))
    }

    static serverError(error) {
        alert(error + "\nPlease try again!")
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

    // in game question rendering

    static clearQuestionContainer() {
        questionContainer.innerHTML = ''
    }

    static renderQuestions() {
        for (const question of Question.all) {
            question.createQuestionDiv()
            question.renderAnswers()
        }
    }

    static toggleQuestionContainer() {
        questionContainer.getAttribute('class') === 'show' ? questionContainer.setAttribute('class', 'hide') : questionContainer.setAttribute('class', 'show')
    }

    createQuestionDiv() {
        const questionDiv = questionContainer.appendChild(document.createElement('div'))
        const questionContentP = questionDiv.appendChild(document.createElement('p'))
        // const hintBtn = questionDiv.appendChild(document.createElement('button'))
        // const hintDiv = questionDiv.appendChild(document.createElement('Div'))

        // hintBtn.setAttribute('id', 'hint')
        // hintDiv.setAttribute('class', 'hide')
        // hintDiv.innerText = 'hint' // this.hintContent

        questionDiv.setAttribute('id', `question-${this.id}-div`)
        questionDiv.setAttribute('class', 'hide')
        questionContentP.innerText += this.content
    }

    renderAnswers() {
        const answersForm = questionContainer.querySelector(`#question-${this.id}-div`).appendChild(document.createElement('form'))

        this.shuffleAnswers()
        answersForm.setAttribute('id', "answer-form")
        for (let answer of this.answers) {
            answersForm.innerHTML += `<br><input type="radio" id="radio" name="answer" value="${answer.id}"><label>${answer.content}</label>`
        }
        answersForm.innerHTML += "<br><input type='submit' id='submit'>"
    }
}