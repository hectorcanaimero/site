import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PpalComponent } from './ppal.component';

const routes: Routes = [
  { path:'', component: PpalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PpalRoutingModule { }
