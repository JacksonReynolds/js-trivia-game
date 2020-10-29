class User {
    constructor(user) {
        this.id = user.id
        this.name = user.attributes.name
        this.score = user.attributes.score
    }

    static listenForUserSubmit(game) {
        userForm.addEventListener('submit', function(e) {
        e.preventDefault()
        User.addUser(game)
        })
    }

    static addUser(game) {
        const name = userForm.querySelector('input').value
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
                game.user = newUser

                userForm.reset()
                Question.all = []
                Question.clearQuestionContainer()
                Question.loadQuestions()
                User.toggleUserForm()
                newUser.toggleScoreCard()
                game.toggleWelcome()
                game.toggleGameWindow()
            })
    }

    static toggleUserForm() {
        userFormContainer.getAttribute('class') === 'show' ? userFormContainer.setAttribute("class", 'hide') : userFormContainer.setAttribute("class", 'show')
    }

    static displayHiscores(top_users) {
        this.renderHiscoresTable(top_users)
        this.toggleHiscores()
    }

    static clearHiscores() {
        hiscoresDiv.querySelector('table').remove()
    }

    static renderHiscoresTable(top_users) {
        const table = document.createElement('table')

        table.innerHTML += "<tr> <th>user</th> <th>score</th> </tr>"
        for (const user of top_users) {
            table.innerHTML += `<tr> <td>${user.name}</td> <td>${user.score}</td> </tr>`
        }

        hiscoresDiv.appendChild(table)
    }

    static toggleHiscores() {
        hiscoresDiv.getAttribute('class') === 'hide' ? hiscoresDiv.setAttribute('class', 'show') : hiscoresDiv.setAttribute('class', 'hide')
    }

    static getHiscores() {
        fetch("http://localhost:3000/hiscores")
            .then(resp => resp.json())
            .then(hiscores => {
                let top_users = []
                for (let user of hiscores.data) {
                    top_users.push(new User(user))
                }
                this.displayHiscores(top_users)
            })
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