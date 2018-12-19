import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LetterBoxComponent } from './letter-box/letter-box.component';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { DollComponent } from './doll/doll.component';
import { WordComponent } from './word/word.component';
import { AttemptsComponent } from './attempts/attempts.component';
import { LetterBoxSelectableComponent } from './letter-box-selectable/letter-box-selectable.component';
import { TipComponent } from './tip/tip.component';


@NgModule({
  declarations: [
    AppComponent,
    LetterBoxComponent,
    AlphabetComponent,
    DollComponent,
    WordComponent,
    AttemptsComponent,
    LetterBoxSelectableComponent,
    TipComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
