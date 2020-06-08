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
