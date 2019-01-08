
import { Word } from './word.model';
import { WORDS_API } from '../../app.api';
import { CategoryEnum } from './category.enum';

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) { }

  public words(category: string): Observable<Word[]> {
    let queryString: HttpParams;
    if (category !== String(CategoryEnum.ALL)) {
      queryString = new HttpParams().append('category', category);
    }
    
    return this.http.get<Word[]>(`${ WORDS_API }/words`, { params: queryString } );
  }
}

