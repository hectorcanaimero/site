import { ComponenteModule } from './../../shared/componente/componente.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    ComponenteModule,
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
