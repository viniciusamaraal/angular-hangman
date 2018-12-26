import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: 'src/app/menu/menu.module#MenuModule'
  },
  {
    path: 'game',
    loadChildren: 'src/app/game/game.module#GameModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
