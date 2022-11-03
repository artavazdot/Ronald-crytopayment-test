import { Alert, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Snackbar, styled, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Fragment, useEffect, useState } from "react";
import FormationCard from "../../components/FormationCard";
import SectionStyle from "../../styles/SectionStyle";
import PaymentMethod from "../../components/PaymentMethod";
import { useAppDispatch } from "../../redux/store";
import { addPayment, getPaymentByEmail, setCoinPaymentData, updatePaymentyUid } from "../../redux/slices/payments";
import { PaymentModel } from "../../models/PaymentModel";
import { BPayCreateSignature, coinpaymentsCreateTransaction } from "../../services/firebase/cloud-functions";
import { Country }  from "country-state-city";
import { ICountry } from 'country-state-city'
import { CLIENT_PAGES } from "../../routes/paths";
import { useNavigate } from "react-router-dom";
// import { BinancePayService } from "../../services/http/binance-pay.service";


const SignUpFormContainer = styled(SectionStyle)(({theme}) =>  ({
    marginTop: "120px",
    display: "flex",
    [theme.breakpoints.down("lg")]:  {
        flexDirection:  "column-reverse",
    }
}));
const SignUpFormLeftContainer = styled("div")(({theme}) =>  ({
    width: "60%",
    [theme.breakpoints.down("lg")]:  {
        width: "100%",
        marginTop: "20px",
    }
}));
const SignUpFormMethodContainer = styled("div")(() =>  ({
    padding: "20px",
    border: "1px solid #d5d7d9"
}));
const SignUpFormUserContainer = styled("div")(() =>  ({
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #d5d7d9"
}));
const SignUpFormTitle = styled(Typography)(() =>  ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "22px",
}));
const SignUpFormMethod = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
}));
const SignUpFormUser = styled("div")(() => ({
    marginTop: "20px"
}));
const SignUpFormRightContainer = styled("div")(({theme}) => ({
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    }
}));
const SignUpFormBtnContainer = styled("div")(() => ({
    marginTop: "20px",
    display: "flex",
    justifyContent: "flex-end",
}));
const SignUpFormBtn = styled(LoadingButton)(() => ({
    color: "white",
    backgroundColor: "#2ab7ca",
    "&:hover": {
        color: "white",
        backgroundColor: "#2ab7ca",
    }
}));
const HiddenPMForm = styled("div")(() => ({
    display: "none"
}));

function SignUpForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("PM");
    const [open, setOpen] = useState(false);
    const [countries, setCountries] = useState<Array<ICountry>>([]);

    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
  
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  
    const handleLastNameChange = (event: any) => setLastName(event.target.value);
    const handleFirstNameChange = (event: any) => setFirstName(event.target.value);
    const handleEmailChange = (event: any) => setEmail(event.target.value);

    const handlePhoneChange = (event: any) => setPhone(event.target.value);
    const handleAddressChange = (event: any) => setAddress(event.target.value);
    const handleCityChange = (event: any) => setCity(event.target.value);
    const handleCountryChange = (event: SelectChangeEvent) => setCountry(event.target.value);
    const handleStateChange = (event: any) => setState(event.target.value);
    const handleZipChange = (event: any) => setZip(event.target.value);

    useEffect(() => {
        setCountries(Country.getAllCountries());
        // eslint-disable-next-line
    },[]);

    const handleClick = () => {
        setOpen(true);
      };
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    const onSubmit = () => {
        setIsLoading(true);
        if(email && lastName && firstName && paymentMethod !== "CINP")
            dispatch(getPaymentByEmail({email})).unwrap().then((res) =>  {
                if(res && res.STATUS !== 0) {
                    setIsLoading(false);
                    document.location = "https://rolandtrading.podia.com/login";
                }
                else {
                    let payment: PaymentModel = {EMAIL: email, LASTNAME: lastName, FIRSTNAME: firstName, STATUS: 0, METHOD: paymentMethod};
                    dispatch(addPayment({data: payment})).unwrap().then(() =>  {
                        if(paymentMethod === "PM")
                            payWithPM();
                        else if(paymentMethod === "LTC")
                            payWithCoinpayments();
                        else if(paymentMethod === "BPay")
                            payWithBPay();
                    });
                }
            });
        else if(paymentMethod === "CINP" && email && lastName && firstName && address && city  && country && phone && state && zip)
            dispatch(getPaymentByEmail({email})).unwrap().then((res) =>  {
                if(res && res.STATUS !== 0) {
                    setIsLoading(false);
                    document.location = "https://rolandtrading.podia.com/login";
                }
                else {
                    let payment: PaymentModel = {EMAIL: email, LASTNAME: lastName, FIRSTNAME: firstName, STATUS: 0, METHOD: paymentMethod, ADDRESS: address, CITY: city, COUNTRY: country, PHONE: phone, STATE: state, ZIP: zip};
                    dispatch(addPayment({data: payment})).unwrap().then(() =>  {
                        payWithCinetPay();
                    });
                }
            });
        else {
            handleClick();
            setIsLoading(false);
        }
    };

    const payWithPM = () => {
        const form = document.createElement("form");

        const PAYEE_NAME = document.createElement("input");
        PAYEE_NAME.name = "PAYEE_NAME";
        PAYEE_NAME.value = "RTM";

        const PAYEE_ACCOUNT = document.createElement("input");
        PAYEE_ACCOUNT.name = "PAYEE_ACCOUNT";
        PAYEE_ACCOUNT.value = "U18524740";

        const PAYMENT_AMOUNT = document.createElement("input");
        PAYMENT_AMOUNT.name = "PAYMENT_AMOUNT";
        PAYMENT_AMOUNT.value = "350";

        const PAYMENT_UNITS = document.createElement("input");
        PAYMENT_UNITS.name = "PAYMENT_UNITS";
        PAYMENT_UNITS.value = "USD";

        const PAYMENT_URL = document.createElement("input");
        PAYMENT_URL.name = "PAYMENT_URL";
        PAYMENT_URL.value = "https://rolandtrading.net";

        const PAYMENT_URL_METHOD = document.createElement("input");
        PAYMENT_URL_METHOD.name = "PAYMENT_URL_METHOD";
        PAYMENT_URL_METHOD.value = "LINK";

        const NOPAYMENT_URL = document.createElement("input");
        NOPAYMENT_URL.name = "NOPAYMENT_URL";
        NOPAYMENT_URL.value = "https://rolandtrading.net/signUp";

        const NOPAYMENT_URL_METHOD = document.createElement("input");
        NOPAYMENT_URL_METHOD.name = "NOPAYMENT_URL_METHOD";
        NOPAYMENT_URL_METHOD.value = "LINK";

        const FORCED_PAYMENT_METHOD = document.createElement("input");
        FORCED_PAYMENT_METHOD.name = "FORCED_PAYMENT_METHOD";
        FORCED_PAYMENT_METHOD.value = "account";

        const SUGGESTED_MEMO = document.createElement("input");
        SUGGESTED_MEMO.name = "SUGGESTED_MEMO";
        SUGGESTED_MEMO.value = "ROLAND TRADING MENTORSHIP";

        const SUGGESTED_MEMO_NOCHANGE = document.createElement("input");
        SUGGESTED_MEMO_NOCHANGE.name = "SUGGESTED_MEMO_NOCHANGE";
        SUGGESTED_MEMO_NOCHANGE.value = "1";

        const EMAIL = document.createElement("input");
        EMAIL.name = "EMAIL";
        EMAIL.value = email;

        const LASTNAME = document.createElement("input");
        LASTNAME.name = "LASTNAME";
        LASTNAME.value = lastName;

        const FIRSTNAME = document.createElement("input");
        FIRSTNAME.name = "FIRSTNAME";
        FIRSTNAME.value = firstName;

        const BAGGAGE_FIELDS = document.createElement("input");
        BAGGAGE_FIELDS.name = "BAGGAGE_FIELDS";
        BAGGAGE_FIELDS.value = "EMAIL LASTNAME FIRSTNAME";

        const STATUS_URL = document.createElement("input");
        STATUS_URL.name = "STATUS_URL";
        STATUS_URL.value = "https://us-central1-roland-trading-prod.cloudfunctions.net/pmPaymentStatus";

        form.appendChild(PAYEE_NAME);
        form.appendChild(PAYEE_ACCOUNT);
        form.appendChild(PAYMENT_AMOUNT);
        form.appendChild(PAYMENT_UNITS);
        form.appendChild(PAYMENT_URL);
        form.appendChild(PAYMENT_URL_METHOD);
        form.appendChild(NOPAYMENT_URL);
        form.appendChild(NOPAYMENT_URL_METHOD);
        form.appendChild(FORCED_PAYMENT_METHOD);
        form.appendChild(SUGGESTED_MEMO);
        form.appendChild(SUGGESTED_MEMO_NOCHANGE);
        form.appendChild(EMAIL);
        form.appendChild(LASTNAME);
        form.appendChild(FIRSTNAME);
        form.appendChild(BAGGAGE_FIELDS);
        form.appendChild(STATUS_URL);

        form.method = "POST";
        form.action = "https://perfectmoney.is/api/step1.asp";
        document.getElementById("pmForm")!.appendChild(form);
        form.submit();
    };

    const payWithCoinpayments = () => {
        setIsLoading(true);
        const payment:PaymentModel = {EMAIL: email, LASTNAME: lastName, FIRSTNAME: firstName, STATUS: 0, METHOD: paymentMethod};
        coinpaymentsCreateTransaction(payment).then(res => {
            let data:any = res.data;
            if(data.success && data.data){
                dispatch(setCoinPaymentData(data.data));
                navigate(CLIENT_PAGES.coinpayment);
            }
            else if(data.success && !data.data)
                document.location = "https://rolandtrading.podia.com/login";
        });
    };

    const payWithBPay = () => {
        setIsLoading(true);
        const payment:PaymentModel = {EMAIL: email, LASTNAME: lastName, FIRSTNAME: firstName, STATUS: 0, METHOD: paymentMethod};
        const timestamp = new Date().getTime().toString();
        const apiKey = "xzjuonlyf4ztudzkghayhsh0ozejns71tnl4jw992fwcg6kpq4olxp83r7peedom";
        const secretKey = "r5wzvcd7ajsnukou0kpgey5mmoybourkefdtzitd2qmv9uvds5fkvpflectvcvud";

        const payload = {
            env : {
              "terminalType": "WEB"
            },
            merchantTradeNo: timestamp,
            orderAmount: 350,
            currency: "BUSD",
            goods : {
              goodsType: "02",
              goodsCategory: "Z000",
              referenceGoodsId: timestamp,
              goodsName: "Programme RTM",
              goodsDetail: "Programme Roland Trading Mentorship"
            },
            buyer: {
                firstName: payment.FIRSTNAME,
                lastName: payment.LASTNAME,
            },
            // returnUrl: "",
            // cancelUrl: "",
        };

        BPayCreateSignature({timestamp, secretKey, payload}).then(res => {
            let data:any = res.data;
            if(data.success && data.data){
                const headers = {
                    'Content-Type': 'application/json',
                    'BinancePay-Timestamp': timestamp,
                    'BinancePay-Nonce': data.data.BPayNonce,
                    'BinancePay-Certificate-SN': apiKey,
                    'BinancePay-Signature': data.data.signature.toUpperCase(),
                };

                // const https = new BinancePayService();

                // https.payWithBPay("binancepay/openapi/v2/order", payload, headers).then(res => {
                //     console.log(res);
                // }).catch(err => {
                //     console.log(err);
                // });

                return fetch("https://bpay.binanceapi.com/binancepay/openapi/v2/order", {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: headers
                }).then(response => {
                    console.log(response);
                    return response.json();
                }).then(response => {
                    setIsLoading(false);
                    const res:any = {...payment, ...response};
                    console.log(res);
                    // return dispatch(updatePaymentyUid({email: payment.EMAIL, data: res})).then(() => {
                    //     if(res.code === "201" && res.data.payment_url)
                    //         document.location = res.data.payment_url;
                    // });
                }).catch(err => {
                    setIsLoading(false);
                    console.log(err);
                    return {
                        "error":  true,
                        "success":  false,
                        "data": err
                    };
                });
            }
        });
    };

    const payWithCinetPay = () => {
        setIsLoading(true);
        const payment:PaymentModel = {EMAIL: email, LASTNAME: lastName, FIRSTNAME: firstName, STATUS: 0, METHOD: paymentMethod, ADDRESS: address, CITY: city, COUNTRY: country, PHONE: phone, STATE: state, ZIP: zip};
        const transaction_id = new Date().getTime().toString();

        let formdata = new FormData();
        formdata.append("site_id", "986846");
        formdata.append("apikey", "420403536633d9fab5a28e0.67734359");
        formdata.append("transaction_id", transaction_id);
        formdata.append("metadata", payment.EMAIL);
        formdata.append("amount", "200");
        formdata.append("currency", "XOF");
        formdata.append("notify_url", "https://us-central1-roland-trading-prod.cloudfunctions.net/cinetpayPaymentStatus");
        formdata.append("return_url", "https://rolandtrading.net/");
        formdata.append("channels", "ALL");
        formdata.append("description", "Inscription à RTM");

        formdata.append("customer_id", payment.EMAIL);
        formdata.append("customer_name", payment.LASTNAME);
        formdata.append("customer_surname", payment.FIRSTNAME);
        formdata.append("customer_phone_number", payment.PHONE!);
        formdata.append("customer_email", payment.EMAIL);
        formdata.append("customer_address", payment.ADDRESS!);
        formdata.append("customer_city", payment.CITY!);
        formdata.append("customer_country", payment.COUNTRY!);
        formdata.append("customer_state", payment.STATE!);
        formdata.append("customer_zip_code", payment.ZIP!);

        const requestOptions = {
            method: 'POST',
            body: formdata,
        };

        return fetch("https://api-checkout.cinetpay.com/v2/payment", requestOptions).then(response => response.json()).then(response => {
            const res:any = {...payment, ...response};
            return dispatch(updatePaymentyUid({email: payment.EMAIL, data: res})).then(() => {
                if(res.code === "201" && res.data.payment_url)
                    document.location = res.data.payment_url;
            });
        }).catch(error => {
            setIsLoading(false);
            return {
                "error":  true,
                "success":  false,
                "data": error
            };
        });
    };

    return (
        <SignUpFormContainer>
            <SignUpFormLeftContainer>
                <SignUpFormMethodContainer>
                    <SignUpFormTitle>Methode de paiement</SignUpFormTitle>
                    <SignUpFormMethod>
                        {/* <PaymentMethod sx={{marginTop: "10px"}} imgSx={{width: "170px"}} selected={paymentMethod === "CINP"} logo="https://docs.cinetpay.com/images/latest_box.webp" name="VISA/Mobile money" onClick={() => setPaymentMethod("CINP")}/> */}
                        <PaymentMethod sx={{marginTop: "10px"}} selected={paymentMethod === "PM"} logo="/images/pm.png" name="Perfect Money" onClick={() => setPaymentMethod("PM")}/>
                        <PaymentMethod sx={{marginTop: "10px"}} imgSx={{width: "170px"}} selected={paymentMethod === "BPay"} logo="/images/binance.png" name="Binance Pay" onClick={() => setPaymentMethod("BPay")}/>
                        {/* <PaymentMethod sx={{marginTop: "10px"}} selected={paymentMethod === "LTC"} logo="https://www.coinpayments.net/images/coins/LTC.png" name="LTC" onClick={() => setPaymentMethod("LTC")}/> */}
                    </SignUpFormMethod>
                </SignUpFormMethodContainer>
                    <SignUpFormUserContainer>
                        <SignUpFormTitle>Compte</SignUpFormTitle>
                        <SignUpFormUser>
                            <TextField value={lastName} onChange={handleLastNameChange} fullWidth size="small" label="Nom" helperText=" "/>
                            <TextField value={firstName} onChange={handleFirstNameChange} fullWidth size="small" label="Prenom" helperText=" "/>
                            <TextField value={email} onChange={handleEmailChange} fullWidth size="small" label="Email" helperText=" "/>
                            {paymentMethod === "CINP" &&
                                <Fragment>
                                    <TextField sx={{marginTop: "10px"}} value={phone} onChange={handlePhoneChange} fullWidth size="small" label="Telephone" helperText="Nunéro de telephone (Ex: +33 6 11 22 33 44)"/>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Pays</InputLabel>
                                        <Select size="small" labelId="demo-simple-select-label" sx={{marginTop: "10px"}} value={country} onChange={handleCountryChange}>
                                            {countries.map((oneCountry, index) => <MenuItem value={oneCountry.isoCode} key={index}>{oneCountry.name}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                    <TextField sx={{marginTop: "10px"}} value={city} onChange={handleCityChange} fullWidth size="small" label="Ville"/>
                                    <TextField sx={{marginTop: "10px"}} value={address} onChange={handleAddressChange} fullWidth size="small" label="Adresse"/>
                                    <TextField sx={{marginTop: "10px"}} value={state} onChange={handleStateChange} fullWidth size="small" label="Etat" helperText="Votre etat; EX: (US) pour  les États Unis d’Amérique ou (CA) pour le Canada"/>
                                    <TextField sx={{marginTop: "10px"}} value={zip} onChange={handleZipChange} fullWidth size="small" label="Code postal"/>
                                </Fragment>
                            }
                        </SignUpFormUser>
                    <HiddenPMForm id="pmForm"></HiddenPMForm>
                    <SignUpFormBtnContainer>
                        <SignUpFormBtn loading={isLoading} onClick={onSubmit} variant="contained">Payer</SignUpFormBtn>
                    </SignUpFormBtnContainer>
                </SignUpFormUserContainer>
            </SignUpFormLeftContainer>
            <SignUpFormRightContainer>
                <FormationCard/>
            </SignUpFormRightContainer>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} sx={{ width: "100%" }} severity="error">Formulaire non valide</Alert>
            </Snackbar>
        </SignUpFormContainer>
    );
}

export default SignUpForm;