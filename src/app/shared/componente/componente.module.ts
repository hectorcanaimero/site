import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { TitleComponent } from './title/title.component';



@NgModule({
  declarations: [MenuComponent, TitleComponent],
  exports: [MenuComponent, TitleComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponenteModule { }
