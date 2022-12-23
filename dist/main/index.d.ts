import Api from "../api";
declare class LotrSDK extends Api {
    constructor(token: string);
    getAllBooks: () => Promise<any>;
    getBookById: (id: number) => Promise<any>;
    getAllMovies: () => Promise<any>;
    getMovieById: (id: number) => Promise<any>;
    getMovieQuotesById: (id: number) => Promise<any>;
    getAllCharacters: () => Promise<any>;
    getCharacter: (id: number) => Promise<any>;
    getCharacterQuotesById: (id: number) => Promise<any>;
    getAllQuotes: () => Promise<any>;
    getQuoteById: (id: number) => Promise<any>;
    getAllBookChapters: () => Promise<any>;
    getBookChapter: (id: number) => Promise<any>;
}
export default LotrSDK;
