import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../models/users.model';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {

    constructor(private http: HttpClient) {
    }

    getCatalog() {
        return this.http.get<IUser[]>(environment.baseUrl + 'catalog');
    }

    addUser(user: IUser) {
        return this.http.post<IUser>(environment.baseUrl + 'catalog', user).toPromise();
    }

    deleteFromCatalog(id: number) {
        return this.http.delete(environment.baseUrl + 'catalog/' + id).toPromise();
    }

    updateUser(user) {
        return this.http.put<IUser>(environment.baseUrl + `catalog/${user.id}`, user).toPromise();
    }
}
