import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IUser } from '../models/users.model';

@Injectable()
export class CatalogService {
    private JSON_URL = 'asstes/MOCK_CATALOG.json';
    constructor(private http: HttpClient) {
    }

    getCatalog() {
       return this.http.get(environment.baseUrl + 'catalog');
    }

    updateCatalog(user) {
        return this.http.post(environment.baseUrl + 'catalog', user).toPromise();
    }

    deleteFromCatalog(id: number) {
        return this.http.delete(environment.baseUrl + 'catalog' + id).toPromise();
    }

    updateUser(user) {
        return this.http.put(environment.baseUrl + `catalog/${user.id}`, user).toPromise();
    }
}
