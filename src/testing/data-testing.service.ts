import { Word } from 'src/app/core/word/word.model';

export class MockedDataService {
    public words(): Word[] {
      return [
        {
          word: 'BRAZIL',
          tip: 'The largest country in both South and Latin America.',
          category: 'PLACES'
        }
      ]
    }
  }