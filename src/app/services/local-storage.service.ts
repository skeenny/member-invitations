import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    addUsersToList(users) {
        localStorage.setItem('list', JSON.stringify(users));
    }

    addUserToList(user) {
        let users;
        if (this.getUsers()) {
            users = this.getUsers();
        } else {
            users = [];
        }
        users.push(user);
        this.addUsersToList(users);
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('list'));
    }

    updateUser(editedUser) {
        let users = this.getUsers();
        users.forEach(user => {
            if (user.id === editedUser.id) {
                user.status = editedUser.status;
            }
        });
        this.addUsersToList(users);
    }

    deleteUser(id) {
        let users = this.getUsers();
        users = users.filter(user => {
            if (user.id !== id) {
                return user;
            }
        });
        this.addUsersToList(users);
    }
}
