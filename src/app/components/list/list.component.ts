import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { IUser } from 'src/app/models/users.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
    public statuses = [
        { label: 'Full', value: 'full' },
        { label: 'Pending', value: 'pending' },
        { label: 'Deactivated', value: 'deactivated' }
    ];
    public membersList: IUser[];
    public listStats = {
        full: 0,
        pending: 0,
        deactivated: 0
    };
    constructor(private localstorageService: LocalStorageService,
                private router: Router) {
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.membersList = this.localstorageService.getUsers();
        this.calcListStats();
    }

    getLabel(value) {
        let label: string;
        this.statuses.map(status => {
            if (status.value === value) {
                label = status.label;
            }
        });
        return label;
    }

    goToCatalog() {
        this.router.navigate(['/catalog']);
    }

    changeUserStatus(status, user) {
        user.status = status;
        this.localstorageService.updateUser(user);
        this.getUsers();
    }

    delete(user) {
        this.membersList = this.membersList.filter(member => {
            if (member.id !== user.id) {
                return member;
            }
        });
        this.localstorageService.addUsersToList(this.membersList);
        this.getUsers();
    }

    calcListStats() {
        this.listStats = {
            full: 0,
            pending: 0,
            deactivated: 0
        };
        this.membersList.map(user => {
            switch (user.status) {
                case 'full':
                    this.listStats.full += 1;
                    return;
                case 'pending':
                    this.listStats.pending += 1;
                    return;
                case 'deactivated':
                    this.listStats.deactivated += 1;
                    return;
                default:
                    return;
            }
        });
    }
}
