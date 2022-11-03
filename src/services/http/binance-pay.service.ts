import { HttpBaseService } from "./httpBase.service";

export class BinancePayService extends HttpBaseService {

    private static classInstance?: BinancePayService;

    public static getInstance(): BinancePayService {

        if(!this.classInstance) {
            this.classInstance = new BinancePayService();
        }

        return this.classInstance;
    }

    public payWithBPay(path: string, payload: any, headers: any) : Promise<any>{
        return this.instance.post(path, payload, {headers}).then(res => {
            return res;
        });
    }

}