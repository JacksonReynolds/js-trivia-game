class Question {
    constructor(question) {
        this.content = question.attributes.content
        this.answers = []
        Question.all.push(this)
    }

    static all = []
    
    get answers() {
        return this.asnwers
    }

    static loadQuestions() {
        fetch('http://localhost:3000/questions')
            .then(resp => resp.json())
            .then(questions => {
                for (let question of questions) {
                    let q = new Question(question)
                    for (let answer of question.attributes.answers) {
                        let a = new Answer(answer)
                        q.answers.push(a)
                    }
                }
            })
    }
}