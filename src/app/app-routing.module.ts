import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
    { path: 'catalog', component: CatalogComponent },
    { path: 'list', component: ListComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
