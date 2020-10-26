class Question {
    constructor(question) {
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
}