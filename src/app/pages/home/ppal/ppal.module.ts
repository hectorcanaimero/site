import { ComponenteModule } from './../../../shared/componente/componente.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PpalRoutingModule } from './ppal-routing.module';
import { PpalComponent } from './ppal.component';


@NgModule({
  declarations: [PpalComponent],
  imports: [
    CommonModule,
    ComponenteModule,
    PpalRoutingModule
  ]
})
export class PpalModule { }
