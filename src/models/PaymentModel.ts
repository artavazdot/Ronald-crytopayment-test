export interface  PaymentModel {
    EMAIL:  string,
    LASTNAME:  string,
    FIRSTNAME: string,
    STATUS: number,
    METHOD: string

    PHONE?: string,
    ADDRESS?: string,
    CITY?: string,
    COUNTRY?: string,
    STATE?: string,
    ZIP?: string,
}