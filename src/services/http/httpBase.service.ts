
import axios, {AxiosInstance} from "axios";

export abstract class HttpBaseService {
    protected instance: AxiosInstance;
    protected readonly baseUrl: string = "https://bpay.binanceapi.com";

    constructor() {
        this.instance = axios.create({
            baseURL: this.baseUrl,
        });
    }

}