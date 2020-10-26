class Question {
    constructor(question) {
        this.content = question.attributes.content
        this.answers = []
        Question.all.push(this)
    }

    static all = []
    static answers = []

    static loadQuestions() {
        fetch('http://localhost:3000/questions')
            .then(resp => resp.json())
            .then(questions => {
                for (let question of questions) {
                    new Question(question)
                }
            })
    }

    static
}