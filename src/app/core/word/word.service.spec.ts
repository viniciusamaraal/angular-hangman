import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { WordsService } from './word.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Word } from './word.model';
import { WORDS_API } from 'src/app/app.api';
import { CategoryEnum } from './category.enum';

describe('DataService', () => {
    let injector: TestBed;
    let httpMock: HttpTestingController;
    let service: WordsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WordsService],
            imports: [HttpClientTestingModule]
        });

        injector = getTestBed();
        httpMock = injector.get(HttpTestingController);
        service = injector.get(WordsService);
    });

    afterEach(() =>{
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return the right data when passing no category on filter', () => {
        const mock: Word[] = [
            {
                word: "CHINA",
                tip: "World's most populous country.",
                category: "2"
            },
            {
                word: 'SONARQUBE',
                tip: 'Monitor for the health of an application and highlights issues newly introduced', 
                category: '3'
            }
        ];

        service.words(String(CategoryEnum.ALL)).subscribe(listOfWords => {
            expect(listOfWords.length).toBe(2);
            expect(listOfWords).toEqual(mock);
        });

        const testRequest = httpMock.expectOne(`${ WORDS_API }/words`);
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush(mock); 
    });

    it('should return the right data when passing no category on filter', () => {
        const mock: Word[] = [
            {
                word: "CHINA",
                tip: "World's most populous country.",
                category: "2"
            },
            {
                "word": "POLAND",
                "tip": "My currency is the Złoty.",
                "category": "2"
            },
        ];

        let category = String(CategoryEnum.PLACES);
        service.words(String(category)).subscribe(listOfWords => {
            expect(listOfWords.length).toBe(2);
            expect(listOfWords).toEqual(mock);
        });

        const testRequest = httpMock.expectOne(`${ WORDS_API }/words?category=${ category }`);
        expect(testRequest.request.method).toBe('GET');
        testRequest.flush(mock);
    });
});
