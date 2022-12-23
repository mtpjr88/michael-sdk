declare class Api {
    private client;
    private errorHandler;
    constructor(token: string);
    protected init(token: string): this;
    protected get(url: string, args?: any): Promise<any>;
    protected post(url: string, args?: any): Promise<any>;
    protected put(url: string, args?: any): Promise<any>;
    protected destroy(url: string, args: any): Promise<any>;
}
export default Api;
