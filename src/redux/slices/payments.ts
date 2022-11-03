import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CoinpaymentsTransaction } from "../../models/CoinpaymentsTransaction";
import { PaymentModel } from "../../models/PaymentModel";
import * as payments from "../../services/firebase/firestore/payments";

// Thunks
export const getPayments = createAsyncThunk(
    "payments/getPayments",
    async () => {
        return payments.getPayments();
    }
);
export const getPaymentByEmail = createAsyncThunk<PaymentModel, {email: string}>(
    "payments/getPaymentByEmail",
    async (args) => {
        const {email} = args;
        return payments.getPaymentByEmail(email);
    }
);
export const updatePaymentyUid = createAsyncThunk<void, {email: string, data: any}>(
    "payments/updatePaymentyUid",
    async (args) => {
        const {email, data} = args;
        return payments.updatePaymentByEmail(email, data);
    }
);
export const addPayment = createAsyncThunk<void, {data: PaymentModel}>(
    "payments/addPayment",
    async (args) => {
        const {data} = args;
        return payments.addPayment(data);
    }
);

interface UsersState {
    payments: Array<PaymentModel>,
    coinPaymentData: CoinpaymentsTransaction | null,
};

const initialState: UsersState = {
    payments: [],
    coinPaymentData: null,
};

const usersSlice = createSlice({
    name: "payments",
    initialState,
    reducers: {
        setCoinPaymentData(state, action) {
            state.coinPaymentData = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPayments.fulfilled, (state, { payload }) => {
            state.payments = payload;
        });
    }
});

export const { setCoinPaymentData } = usersSlice.actions;
export default usersSlice.reducer;