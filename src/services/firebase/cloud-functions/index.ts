import { PaymentModel } from "../../../models/PaymentModel";
import * as cloudFunctions from "./cloud-functions";

export const coinpaymentsCreateTransaction = (payment: PaymentModel) => {
    return cloudFunctions.httpsCallable(cloudFunctions.funtions, "coinpaymentsCreateTransaction")(payment);
}
export const BPayCreateSignature = (data: Object) => {
    return cloudFunctions.httpsCallable(cloudFunctions.funtions, "BPayCreateSignature")(data);
}
