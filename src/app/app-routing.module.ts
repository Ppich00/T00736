import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './component/add-edit/add-edit.component';
import { SaleOnlineComponent } from './component/saleOnline/saleOnline.component';

const routes: Routes = [{ path: '', redirectTo: '/search', pathMatch: 'full' },
{ path: 'search', component: SaleOnlineComponent },
{ path: 'add', component: AddEditComponent },
{ path: 'edit', component: AddEditComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
