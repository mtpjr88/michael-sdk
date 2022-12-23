# How to use

# if potential issues running

- consuming application should also have typescript vesrion 4.9.4

- \*not ideal (last resort if you cannot get running, copy and paste files in consuming app)

# install

```terminal
> npm i @mtpjr88/lotr-sdk
```

# run locally in consuming app

```terminal
> npm link @mtpjr88/lotr-sdk
```

# example

```typescript
import LotrSDK from '@mtpjr88/lotr-sdk';

// instantiate
const sdk = new sdk('jJ6JNW715HN-v9qsjTuy');

// All methods return a promise, hence supports .then() or async await

/** returns all book chapters */
const result = await sdk.getAllBookChapters();
/** returns all books */
const result = await sdk.getAllBooks();
/** returns one specific book */
const result = await sdk.getBookById(id);
/** returns all chapters of one specific book */
const result = await sdk.getAllMovies();
/** returns one specific movie*/
const result = await sdk.getMovieById();
/** returns all movie quotes for one specific movie (only working for the LotR trilogy) */
const result = await sdk.getMovieQuotesById();
/** returns list of characters including metadata like name, gender, realm, race and more */
const result = await sdk.getAllCharacters();
/** returns one specific character */
const result = await sdk.getCharacter();
/* returns all movie quotes of one specific character*/
const result = await sdk.getCharacterQuotesById(0);
/**List of all movie quotes */
const result = await sdk.getAllQuotes();
/**Request one specific movie quote */
const result = await sdk.getQuoteById(0);
/**List of all book chapters */
const result = await sdk.getAllBookChapters();
/**returns one specific book chapter */
const result = await sdk.getBookChapter(0);
```
