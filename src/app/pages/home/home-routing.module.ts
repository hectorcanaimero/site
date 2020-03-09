import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SobreModule } from './sobre/sobre.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';
import { PpalModule } from './ppal/ppal.module';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children:[
      {
        path: '',
        loadChildren: ()=> import('./ppal/ppal.module').then(m=>PpalModule)
      },
      {
        path: 'sobre',
        loadChildren: ()=> import('./sobre/sobre.module').then(m=>SobreModule),
        data: { animation: 'isRight' }
      },
      {
        path: 'portfolio',
        loadChildren: ()=> import('./portfolio/portfolio.module').then(m=>PortfolioModule),
        data: { animation: 'isLeft' }
      },
      {
        path: 'contact',
        loadChildren: ()=> import('./contact/contact.module').then(m=>ContactModule),
        data: { animation: 'isRight' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
