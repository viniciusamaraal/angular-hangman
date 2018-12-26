import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  { path: 'principal', component: ContainerComponent },
  { path: '', redirectTo: 'principal', pathMatch: 'full' }
];

  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ],
    declarations: [ 
     
    ]
  })
  export class GameRoutingModule {
  }