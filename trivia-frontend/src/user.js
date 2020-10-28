class User {
    constructor(user) {
        this.name = user.attributes.name
        this.score = 0
    }

    static addUser() {
        const name = this.querySelector('input').value
        let user = {user: {name}}
        let options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(user)
        }
        fetch("http://localhost:3000/users", options)
            .then(resp => resp.json())
            .then(user => {
                let newUser = new User(user.data)
                const newGame = new Game(newUser)

                this.reset()
                Question.loadQuestions()
                User.toggleUserForm()
                newUser.showScoreCard()
                newGame.renderWelcome()
            })
    }

    static toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }

    showScoreCard() {
        scoreCardDiv.innerHTML = `<p><str>${this.name}'s Score: <span>0</span></str></p>`
        scoreCardDiv.setAttribute('class', 'show')
    }

    updateScoreCard() {
        const scoreSpan = scoreCardDiv.querySelector('span')

        scoreSpan.innerText = this.score
    }
} 