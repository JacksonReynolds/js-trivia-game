class User {
    constructor(name) {
        this.name = name
    }

    showNameTag() {

    }

    static addUser(e) {
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
            .then(user => {new User(user)})
        this.reset()
    }
} 