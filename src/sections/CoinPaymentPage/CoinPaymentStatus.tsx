import { CopyAll } from "@mui/icons-material";
import { IconButton, styled, Typography } from "@mui/material";
import { RootState, useAppSelector } from "../../redux/store";
import SectionStyle from "../../styles/SectionStyle";
import copy from "copy-to-clipboard";

const  CoinPaymentStatusContainer = styled(SectionStyle)(({theme}) => ({
    marginTop: "120px",
    display: "flex",
    [theme.breakpoints.down("lg")]:  {
        flexDirection:  "column-reverse",
    }
}));
const CoinPaymentStatusLeftContainer = styled("div")(({theme}) =>  ({
    width: "60%",
    [theme.breakpoints.down("lg")]:  {
        width: "100%",
        marginTop: "20px",
    }
}));
const CoinPaymentStatusDataContainer = styled("div")(() =>  ({
    border: "1px solid #d5d7d9"
}));
const CoinPaymentStatusLeftTitle = styled(Typography)(() =>  ({
    paddingTop: "20px",
    paddingLeft: "20px",
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "22px",
}));
const CoinPaymentStatusLeftSubTitle = styled(Typography)(() =>  ({
    paddingLeft: "20px",
    fontSize: "15px",
    marginBottom: "10px",
}));
const CoinPaymentStatusDataRow = styled("div")(() =>  ({
    minHeight: "50px",
    paddingLeft: "20px",
    paddingRight: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #d5d7d9"
}));
const CoinPaymentStatusDataCol = styled("div")(() =>  ({
    width: "calc(100% - 40px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
}));
const CoinPaymentStatusDataRowText = styled(Typography)(() => ({
    fontSize: "15px",
    color: "#525965"
}));
const CoinPaymentStatusDataRowValue = styled(Typography)(() => ({
    fontSize: "17px",
    wordWrap: "break-word"
}));
const CoinPaymentStatusRightContainer = styled("div")(({theme}) => ({
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    }
}));
const QrCode = styled("img")(({theme}) => ({
    width: "300px",
    height: "300px",
    alignSelf: "center",
    margin: "12px",
    borderRadius: ".5rem",
    [theme.breakpoints.down("md")]: {
        width: "300px",
        height: "300px",
    }
}));

function CoinPaymentStatus() {
    const coinPaymentData = useAppSelector((state: RootState) => state.payments.coinPaymentData);

    const copyToClipboard = (text: string) => copy(text);
    
    return (
        <CoinPaymentStatusContainer>
            <CoinPaymentStatusLeftContainer>
                <CoinPaymentStatusDataContainer>
                    <CoinPaymentStatusLeftTitle>Procéder au payment</CoinPaymentStatusLeftTitle>
                    <CoinPaymentStatusLeftSubTitle>Scanner le code QR ou envoyer directement a l'adresse ci-dessous</CoinPaymentStatusLeftSubTitle>
                    <CoinPaymentStatusDataRow>
                        <CoinPaymentStatusDataCol>
                            <CoinPaymentStatusDataRowText>Quantité exacte à envoyer</CoinPaymentStatusDataRowText>
                            <CoinPaymentStatusDataRowValue>{coinPaymentData!.amount} {coinPaymentData?.METHOD}</CoinPaymentStatusDataRowValue>
                        </CoinPaymentStatusDataCol>
                        <IconButton onClick={() => copyToClipboard(coinPaymentData!.amount)}><CopyAll/></IconButton>
                    </CoinPaymentStatusDataRow>
                    <CoinPaymentStatusDataRow>
                        <CoinPaymentStatusDataCol>
                            <CoinPaymentStatusDataRowText>Adresse {coinPaymentData?.METHOD}</CoinPaymentStatusDataRowText>
                            <CoinPaymentStatusDataRowValue>{coinPaymentData?.address}</CoinPaymentStatusDataRowValue>
                        </CoinPaymentStatusDataCol>
                        <IconButton onClick={() => copyToClipboard(coinPaymentData!.address)}><CopyAll/></IconButton>
                    </CoinPaymentStatusDataRow>
                </CoinPaymentStatusDataContainer>
            </CoinPaymentStatusLeftContainer>
            <CoinPaymentStatusRightContainer>
                <QrCode src={coinPaymentData?.qrcode_url}/>
            </CoinPaymentStatusRightContainer>
        </CoinPaymentStatusContainer>
    );
}

export default CoinPaymentStatus;