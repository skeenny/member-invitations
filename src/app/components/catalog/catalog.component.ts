import { Component, OnInit, ViewChild } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { IUser } from 'src/app/models/users.model';
import { CatalogAddComponent } from '../catalog-add/catalog-add.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {
    public catalog: IUser[];
    public statuses = [
        { label: 'Full', value: 'full' },
        { label: 'Pending', value: 'pending' },
        { label: 'Deactivated', value: 'deactivated' },
        { label: 'Not invited', value: 'not-invited' },
    ];
    public usersList: IUser[];
    public clonedUsers: { [s: string]: IUser; } = {};
    @ViewChild(CatalogAddComponent, { static: false }) catalogAddComponent: CatalogAddComponent;
    constructor(private catalogService: CatalogService,
                private localstorageService: LocalStorageService,
                private router: Router) {
    }

    ngOnInit() {
        this.loadCatalog();
    }

    loadCatalog() {
        this.catalogService.getCatalog().subscribe((data: IUser[]) => {
            this.formatTableData(data);
        });
    }

    formatTableData(data) {
        this.usersList = this.localstorageService.getUsers();
        this.catalog = data;
        if (this.usersList) {
            this.usersList.map(member => {
                if (member.status) {
                    data.map(user => {
                        if (member.id === user.id) {
                            user.status = member.status;
                        }
                    });
                }
            });
            this.catalog = data;
        }
    }

    addToList(user: IUser) {
        user.status = 'deactivatedd';
        this.localstorageService.addUserToList(user);
        this.formatTableData(this.catalog);
    }

    delete(user) {
        this.catalogService.deleteFromCatalog(user.id).then(() => {
            this.loadCatalog();
        });
        this.localstorageService.deleteUser(user.id);
    }

    openDialog() {
        this.catalogAddComponent.visible = true;
    }

    onRowEditInit(user: IUser) {
        this.clonedUsers[user.id] = { ...user };
    }

    onRowEditSave(user: IUser) {
        this.catalogService.updateUser(user).then(() => {
            this.loadCatalog();
        });
        delete this.clonedUsers[user.id];
    }

    onRowEditCancel(user: IUser, index: number) {
        this.catalog[index] = this.clonedUsers[user.id];
        delete this.clonedUsers[user.id];
    }

    goToList() {
        this.router.navigate(['/list']);
    }

}
