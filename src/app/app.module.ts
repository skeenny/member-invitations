import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalStorageService } from './services/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { CatalogService } from './services/catalog.service';
import { TableModule } from 'primeng/table';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CatalogAddComponent } from './components/catalog-add/catalog-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
    declarations: [
        AppComponent,
        CatalogComponent,
        ListComponent,
        CatalogAddComponent,
        ChartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TableModule,
        BrowserAnimationsModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule,
        PanelModule,
        InputTextModule,
        DialogModule,
        DropdownModule,
        ChartModule
    ],
    providers: [
        LocalStorageService,
        CatalogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
