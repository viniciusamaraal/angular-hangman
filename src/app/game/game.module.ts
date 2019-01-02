import { NgModule } from '@angular/core';

import { ContainerComponent } from './container/container.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { DollComponent } from './doll/doll.component';
import { WordComponent } from './word/word.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { LetterBoxSelectableComponent } from './letter-box-selectable/letter-box-selectable.component';
import { TipComponent } from './tip/tip.component';
import { SetupComponent } from './setup/setup.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContainerComponent,
    LetterBoxComponent,
    AlphabetComponent,
    DollComponent,
    WordComponent,
    AttemptsComponent,
    LetterBoxSelectableComponent,
    TipComponent,
    SetupComponent,
    ScoreboardComponent
  ],
  imports: [
    GameRoutingModule,
    SharedModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class GameModule { }
