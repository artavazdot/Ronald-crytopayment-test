import { PaymentModel } from "../../../../models/PaymentModel";
import * as firestore from "../firestore";

const paymentsRef = firestore.collection(firestore.firestore, "payments");

export const getPayments = async (): Promise<Array<PaymentModel>> => {
    return (await firestore.getDocs(paymentsRef)).docs.map(doc => doc.data() as PaymentModel);
};

export const getPaymentByEmail = async (email: string): Promise<PaymentModel> => {
    return (await firestore.getDoc(firestore.doc(paymentsRef, email))).data() as PaymentModel;
};
export const updatePaymentByEmail = async (email: string, data: any) => {
    const docRef = firestore.doc(paymentsRef, email);
    return firestore.updateDoc(docRef, data);
};
export const addPayment = async (payment: PaymentModel) => {
    const docRef = firestore.doc(paymentsRef, payment.EMAIL);
    return firestore.setDoc(docRef, payment);
};
