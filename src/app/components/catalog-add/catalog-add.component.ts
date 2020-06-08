import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { IUser } from 'src/app/models/users.model';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
    selector: 'app-catalog-add',
    templateUrl: './catalog-add.component.html',
    styleUrls: ['./catalog-add.component.sass']
})
export class CatalogAddComponent implements OnInit {
    public visible: boolean = false;
    public userform: FormGroup;
    @Output() loadCatalog: EventEmitter<any> = new EventEmitter();
    constructor(private catalogService: CatalogService,
                private fb: FormBuilder) {}

    ngOnInit() {
        this.userform = this.fb.group({
            'firstName': new FormControl('', Validators.required),
            'lastName': new FormControl('', Validators.required)
        });
    }

    onSubmit(user: IUser) {
        this.catalogService.addUser(user).then(() => {
            this.visible = false;
            this.loadCatalog.emit((err?: Error) => {
                if (err) {
                    console.log(err.message);
                }
            });
        }, (response: HttpErrorResponse) => {
            console.log(response.error.error);
        });
    }
}
