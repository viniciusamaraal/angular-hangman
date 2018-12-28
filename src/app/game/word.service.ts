import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Word } from './word.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { WORDS_API } from '../app.api';
import { CategoryEnum } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: Http) { }

  words(category: string): Observable<Word[]> {
    let queryString = category == String(CategoryEnum.ALL) ? '' : `?category=${category}`;
    
    return this.http.get(`${ WORDS_API }/words` + queryString)
      .map(response => response.json());
  }
}
