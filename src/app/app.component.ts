import { Component, OnInit } from '@angular/core';
import { CatalogService } from './services/catalog.service';
import { LocalStorageService } from './services/local-storage.service';
import { IUser } from './models/users.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    constructor(private localStorageService: LocalStorageService,
                private catalogService: CatalogService) {

    }

    ngOnInit() {
        this.catalogService.getCatalog().subscribe((data: IUser[]) => {
            let invitedUsers = [];
            data.map(user => {
                if (user.type) {
                    invitedUsers.push(user);
                }
            });
            this.localStorageService.addUsersToList(invitedUsers);
        });
    }
}
