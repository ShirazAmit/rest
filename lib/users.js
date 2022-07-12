class Users {
    constructor() {
        this.users = [
            { id: 1, name: 'ynon', email: 'ynon@tocode.co.il' },
        ];
        this.nextId = 2;
    }

    addUser(name, email) {
        const newUser = { id: this.nextId++, name: name, email: email }
        this.users.push(newUser);
        return newUser.id;
    }

    deleteUser(id) {
        const idx = this.users.findIndex(item => item.id === Number(id));
        this.users.splice(idx, 1);
    }

    listUsers() {
        return this.users;
    }

    updateUser(id, details) {
        const user = this.findUserById(id);
        if (details.email) {
            user.email = details.email;
        }

        if (details.name) {
            user.name = details.name;
        }
    }

    findUserById(id) {
        return this.users.find(item => item.id === Number(id));
    }
}


module.exports = new Users();