import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';

const routes: Routes = [{ path: 'game', component: ContainerComponent }];

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