import { NgModule } from '@angular/core';
import { WordsService } from './word/word.service';

@NgModule({
  providers: [ WordsService ]
})
export class CoreModule { } 
// tornou-se obsoleto porque os providers são declarados no método forRoot do SharedModule