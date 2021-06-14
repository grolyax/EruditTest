import storageService from './storage-service.js';

class UserList {
    constructor(users) {
        this.users = users;
    }

    add(user) {
        const existingUser = this.getUserByEmail(user.email);

        if (existingUser) {
            throw new Error('Пользователь с таким адресом уже существует');
        }

        this.users = [...this.users, user]
    }

    getUserByEmail(email) {
        return this.users.find(user => user.email === email);
    }

    updateUserScoreById(id, topic, testResult, date) {
        this.users = this.users.map(user => {   // map а не forEach потому что операция-мутация, а не перебор
            if (user.id === id) {
                if (user.score[topic].record <= testResult) {
                    user.score[topic].record = testResult;
                    user.score[topic].date = date;
                }
            }

            return user;
        });
    }
}

const users = JSON.parse(storageService.get('users'));

const userList = new UserList(users || []);

export default userList;