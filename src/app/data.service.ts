import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Word } from './word.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { WORDS_API } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  words(): Observable<Word[]> {
    console.log('teste ' + WORDS_API);
    return this.http.get(`${ WORDS_API }/words`)
      .map(response => response.json());
  }
}
