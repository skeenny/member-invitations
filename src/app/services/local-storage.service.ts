import {Injectable} from '@angular/core';

@Injectable()
export class LocalStorageService {

    constructor() {
    }

    addUsersToList(users) {
        localStorage.setItem('list', JSON.stringify(users));
    }

    addUserToList(user) {
        let users = this.getUsers();
        users.push(user);
        this.addUsersToList(users);
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('list'));
    }
}
