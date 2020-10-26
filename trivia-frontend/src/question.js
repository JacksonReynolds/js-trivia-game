class Question {
    constructor(question) {
        this.content = question.attributes.content
        this.answers = []
        Question.all.push(this)
    }

    static all = []
    
    get answers() {
        return this.answers
    }

    shuffleAnswers() {
        for (let i = this.answers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            [this.answers[i], this.answers[j]] = [this.answers[j], this.answers[i]]
        }
    }

    static loadQuestions() {
        fetch('http://localhost:3000/questions')
            .then(resp => resp.json())
            .then(questions => {this.createQuestions(questions)})
        this.shuffleQuestions()
        return this.all
    }

    static shuffleQuestions() {
        for (let i = this.all.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            [this.all[i], this.all[j]] = [this.all[j], this.all[i]]
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