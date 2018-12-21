import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { DollComponent } from './doll/doll.component';
import { WordComponent } from './word/word.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { LetterBoxSelectableComponent } from './letter-box-selectable/letter-box-selectable.component';
import { TipComponent } from './tip/tip.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [
    ContainerComponent,
    LetterBoxComponent,
    AlphabetComponent,
    DollComponent,
    WordComponent,
    AttemptsComponent,
    LetterBoxSelectableComponent,
    TipComponent 
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class GameModule { }
