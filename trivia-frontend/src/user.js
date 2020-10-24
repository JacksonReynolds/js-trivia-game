class User {
    constructor(name) {
        this.name = name
    }

    static addUser(e) {
        e.preventDefault()
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
    }
} 