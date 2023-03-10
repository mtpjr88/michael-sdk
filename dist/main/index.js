"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __importDefault(require("../api"));
var Routes;
(function (Routes) {
    Routes["BOOK"] = "/book";
    Routes["MOVIE"] = "/movie";
    Routes["CHARACTER"] = "/character";
    Routes["QUOTE"] = "/quote";
    Routes["CHAPTER"] = "/chapter";
})(Routes || (Routes = {}));
class LotrSDK extends api_1.default {
    constructor(token) {
        super(token);
        this.getAllBooks = () => __awaiter(this, void 0, void 0, function* () {
            return this.get(Routes.BOOK);
        });
        this.getBookById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.get(`${Routes.BOOK}/${id}`);
        });
        this.getAllMovies = () => __awaiter(this, void 0, void 0, function* () {
            return this.get(Routes.MOVIE);
        });
        this.getMovieById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.get(`${Routes.MOVIE}/${id}`);
        });
        this.getMovieQuotesById = (id) => __awaiter(this, void 0, void 0, function* () {
            const route = `${Routes.MOVIE}/${id}${Routes.QUOTE}`;
            return this.get(route);
        });
        this.getAllCharacters = () => __awaiter(this, void 0, void 0, function* () {
            return this.get(Routes.CHARACTER);
        });
        this.getCharacter = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.get(`${Routes.CHARACTER}/${id}`);
        });
        this.getCharacterQuotesById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.get(`${Routes.CHARACTER}/${id}${Routes.QUOTE}`);
        });
        this.getAllQuotes = () => __awaiter(this, void 0, void 0, function* () {
            return this.get(Routes.QUOTE);
        });
        this.getQuoteById = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.get(`${Routes.QUOTE}/${id}`);
        });
        this.getAllBookChapters = () => __awaiter(this, void 0, void 0, function* () {
            return this.get(Routes.CHAPTER);
        });
        this.getBookChapter = (id) => __awaiter(this, void 0, void 0, function* () {
            return this.get(`${Routes.CHAPTER}/${id}`);
        });
    }
}
exports.default = LotrSDK;
