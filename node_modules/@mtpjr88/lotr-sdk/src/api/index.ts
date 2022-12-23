import axios, { AxiosInstance } from "axios";


enum Headers {
    Authorization = "Authorization"
}

class Api {

    private client!: AxiosInstance;
    private errorHandler() {
        throw new Error('client must be initialized, try envoking ApiUtil.init()');
    }
    constructor(token: string) {
        this.init(token);
    }

    protected init(token: string) {
        this.client = axios.create({
            baseURL: 'https://the-one-api.dev/v2/',
            timeout: 1000,
            headers: { [Headers.Authorization]: `Bearer ${token}` }
        });
        return this;
    }


    protected async get(url: string, args?) {
        return (await this.client.get(url, args))?.data;
    }
    protected async post(url: string, args?) {
        return (await this.client.post(url, args))?.data;
    }
    protected async put(url: string, args?) {
        return (await this.client.put(url, args))?.data;
    }
    protected async destroy(url: string, args) {
        return (await this.client.delete(url, args)).data;
    }
}

export default Api;