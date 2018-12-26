import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container/container.component';
import { MenuRoutingModule } from './menu-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MenuRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class MenuModule { }
