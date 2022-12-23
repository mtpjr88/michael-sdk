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
const axios_1 = __importDefault(require("axios"));
var Headers;
(function (Headers) {
    Headers["Authorization"] = "Authorization";
})(Headers || (Headers = {}));
class Api {
    errorHandler() {
        throw new Error('client must be initialized, try envoking ApiUtil.init()');
    }
    constructor(token) {
        this.init(token);
    }
    init(token) {
        this.client = axios_1.default.create({
            baseURL: 'https://the-one-api.dev/v2/',
            timeout: 1000,
            headers: { [Headers.Authorization]: `Bearer ${token}` }
        });
        return this;
    }
    get(url, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.client.get(url, args))) === null || _a === void 0 ? void 0 : _a.data;
        });
    }
    post(url, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.client.post(url, args))) === null || _a === void 0 ? void 0 : _a.data;
        });
    }
    put(url, args) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = (yield this.client.put(url, args))) === null || _a === void 0 ? void 0 : _a.data;
        });
    }
    destroy(url, args) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.client.delete(url, args)).data;
        });
    }
}
exports.default = Api;
