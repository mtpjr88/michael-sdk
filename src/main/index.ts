import Api from "../@internal/api";

enum Routes {
    BOOK = '/book',
    MOVIE = '/movie',
    CHARACTER = '/character',
    QUOTE = '/quote',
    CHAPTER = '/chapter'
}

class LotrSDK extends Api {
    constructor(token: string) {
        super(token);
    }
    /** returns List of all "The Lord of the Rings" books */
    public getAllBooks = async () => {
        return this.get(Routes.BOOK);
    };
    /** returns one specific book */
    public getBookById = async (id: number) => {
        return this.get(`${Routes.BOOK}/${id}`);
    };
    /** returns all chapters of one specific book */
    public getAllMovies = async () => {
        return this.get(Routes.MOVIE);
    };
    /** returns one specific movie*/
    public getMovieById = async (id: number) => {
        return this.get(`${Routes.MOVIE}/${id}`);
    };
    /** returns all movie quotes for one specific movie (only working for the LotR trilogy) */
    public getMovieQuotesById = async (id: number) => {
        const route = `${Routes.MOVIE}/${id}${Routes.QUOTE}`;
        return this.get(route);
    };

    /** returns list of characters including metadata like name, gender, realm, race and more */
    public getAllCharacters = async () => {
        return this.get(Routes.CHARACTER);
    };
    /** returns one specific character */
    public getCharacter = async (id: number) => {
        return this.get(`${Routes.CHARACTER}/${id}`);
    };
    /* returns all movie quotes of one specific character*/
    public getCharacterQuotesById = async (id: number) => {
        return this.get(`${Routes.CHARACTER}/${id}${Routes.QUOTE}`);
    };
    /**List of all movie quotes */
    public getAllQuotes = async () => {
        return this.get(Routes.QUOTE);
    };
    /**Request one specific movie quote */
    public getQuoteById = async (id: number) => {
        return this.get(`${Routes.QUOTE}/${id}`);
    };
    /**List of all book chapters */
    public getAllBookChapters = async () => {
        return this.get(Routes.CHAPTER);
    };
    /**returns one specific book chapter */
    public getBookChapter = async (id: number) => {
        return this.get(`${Routes.CHAPTER}/${id}`);
    };

}

export default LotrSDK;

