class User {
    constructor(user) {
        this.name = user.attributes.name
        this.score = 0
    }

    static listenForUserSubmit() {
        userForm.addEventListener('submit', function(e) {
        e.preventDefault()
        User.addUser.call(this)
        })
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
                if (Question.length === 0) {
                    Question.loadQuestions()
                }
                User.toggleUserForm()
                newUser.toggleScoreCard()
                newGame.renderWelcome()
            })
    }

    static toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }

    static displayHiscores(hiscores) {
        const restartBtn = hiscoresDiv.querySelector('#start_over')

        this.toggleHiscores()
        restartBtn.addEventListener('click', (e) => {
            e.preventDefault()
            this.toggleHiscores()
            this.toggleUserForm()
            this.listenForUserSubmit()
        })
    }

    static toggleHiscores() {
        hiscoresDiv.getAttribute('class') === 'hide' ? hiscoresDiv.setAttribute('class', 'show') : hiscoresDiv.setAttribute('class', 'hide')
    }

    static getHiscores() {
        fetch("http://localhost:3000/hiscores")
            .then(resp => resp.json())
            .then(hiscores => this.displayHiscores(hiscores))
    }

    toggleScoreCard() {
        if (scoreCardDiv.getAttribute('class') === 'hide') {
            scoreCardDiv.innerHTML = `<p><str>${this.name}'s Score: <span>0</span></str></p>`
            scoreCardDiv.setAttribute('class', 'show')        
        } else {
            scoreCardDiv.setAttribute('class', 'hide')
        }
    }

    updateScoreCard() {
        const scoreSpan = scoreCardDiv.querySelector('span')

        scoreSpan.innerText = this.score
    }
} 