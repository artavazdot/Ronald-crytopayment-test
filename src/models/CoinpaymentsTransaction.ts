export interface CoinpaymentsTransaction {
    fee: number
    METHOD: string
    EMAIL: string
    FIRSTNAME: string
    LASTNAME: string
    amount: string;
    txn_id: string;
    address: string;
    confirms_needed: string;
    timeout: number;
    checkout_url: string;
    status_url: string;
    qrcode_url: string;
}