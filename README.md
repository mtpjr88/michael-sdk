# How to use

- install
  ` npm i @mtpjr88/lotr-sdk`

# example

```typescript
import LotrSDK from '@mtpjr88/lotr-sdk';

// instantiate
const sdk = new sdk('jJ6JNW715HN-v9qsjTuy');

const result = await sdk.getAllBookChapters();
const result = getAllBooks();
/** returns one specific book */
const result = sdk.getBookById(id).then();
/** returns all chapters of one specific book */
const result = sdk.getAllMovies().then();
/** returns one specific movie*/
const result = sdk.getMovieById();
/** returns all movie quotes for one specific movie (only working for the LotR trilogy) */
const result = sdk.getMovieQuotesById();

/** returns list of characters including metadata like name, gender, realm, race and more */
const result = sdk.getAllCharacters();
/** returns one specific character */
const result = sdk.getCharacter();
/* returns all movie quotes of one specific character*/
const result = sdk.getCharacterQuotesById(0);
/**List of all movie quotes */
const result = sdk.getAllQuotes();
/**Request one specific movie quote */
const result = sdk.getQuoteById(0);
/**List of all book chapters */
const result = sdk.getAllBookChapters();
/**returns one specific book chapter */
const result = sdk.getBookChapter(0);
```
