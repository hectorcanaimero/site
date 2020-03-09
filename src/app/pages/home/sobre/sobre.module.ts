import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './sobre.component';
import {ProgressBarModule} from 'angular-progress-bar';

@NgModule({
  declarations: [SobreComponent],
  imports: [
    CommonModule,
    SobreRoutingModule,
    ProgressBarModule
  ]
})
export class SobreModule { }
