import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WordsService } from '../core/word/word.service';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';

@NgModule({
  declarations: [
    InputComponent,
    RadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ 
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    RadioComponent
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ WordsService ]
    }
  }
}
