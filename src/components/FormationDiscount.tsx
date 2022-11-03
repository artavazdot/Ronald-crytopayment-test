import { CheckCircle } from "@mui/icons-material";
import { Button, Divider, styled, Typography } from "@mui/material";
import { CLIENT_PAGES } from "../routes/paths";

const FormationDiscountContainer = styled("div")(({theme}) => ({
    minWidth: "65%",
    height: "231px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    border: "2px solid #2AB7CA",
    borderRadius: "17px",
    marginTop: "30px",
    marginBottom: "30px",
    [theme.breakpoints.down("lg")]: {
        minWidth: "330px",
        height: "auto",
        minHeight: "231px",
        paddingTop: "14px",
        paddingBottom: "14px",
        flexDirection: "column",
    },
}));
const FormationDiscountImageContainer = styled("div")(() => ({
    width: "20%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
}));
const FormationDiscountImage = styled("img")(() => ({
    minWidth: "96px",
    height: "96px",
}));
const FormationDiscountImageText = styled(Typography)(() => ({
    fontSize: "20px",
    fontWeight: 800,
    color: "#808080"
}));
const FormationDiscountQualfs = styled("div")(({theme}) => ({
    width: "30%",
    height: "100%",
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },
}));
const FormationDiscountQualf = styled("div")(() => ({
    width: "100%",
    display: "flex",
    alignItems: "center"
}));
const FormationDiscountQualfIcon = styled(CheckCircle)(() => ({
    color: "#2ab7ca",
    marginRight: "7px"
}));
const Formation = styled("div")(() => ({
    width: "30%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
}));
const CustomDivider = styled(Divider)(() => ({
    width: "1px",
    height: "80%",
    backgroundColor: "#cacaca",
}));
const FormationDiscountNewPrice = styled(Typography)(() => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "48px",
    fontWeight: 800,
    color: "#000000",
}));
const FormationDiscountOldPrice = styled(Typography)(() => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "20px",
    fontWeight: 800,
    color: "#808080",
    textDecorationLine: "line-through",
    textDecorationColor: "#808080",
}));
const FormationDiscountButton = styled(Button)(({theme}) => ({
    minWidth: "270px",
    height: "45px",
    fontSize: "15px",
    fontWeight: 700,
    borderRadius: "20px",
    backgroundColor: '#2ab7ca',
    zIndex: 2,
    '&:hover': {
      backgroundColor: '#2ab7ca',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
        minWidth: "320px",
        height: "60px",
    }
}));

function FormationDiscount() {
    return (
        <FormationDiscountContainer>
            <FormationDiscountImageContainer>
                <FormationDiscountImage src="/images/formation-discount.png"/>
                <FormationDiscountImageText>
                    Lifetime
                </FormationDiscountImageText>
            </FormationDiscountImageContainer>
            <CustomDivider orientation={"horizontal"}/>
            <FormationDiscountQualfs>
                <FormationDiscountQualf><FormationDiscountQualfIcon/> Accès aux programmes RTM</FormationDiscountQualf>
                <FormationDiscountQualf><FormationDiscountQualfIcon/> Une Formation Complète</FormationDiscountQualf>
                <FormationDiscountQualf><FormationDiscountQualfIcon/> Une Communauté Privée</FormationDiscountQualf>
                <FormationDiscountQualf><FormationDiscountQualfIcon/> Un Coaching Privé</FormationDiscountQualf>
            </FormationDiscountQualfs>
            <CustomDivider orientation={"horizontal"}/>
            <Formation>
                <FormationDiscountNewPrice>350$</FormationDiscountNewPrice>
                <FormationDiscountOldPrice>500$</FormationDiscountOldPrice>
                <FormationDiscountButton variant="contained" href={CLIENT_PAGES.signUp}>
                    REJOINDRE LE PROGRAMME
                </FormationDiscountButton>
            </Formation>
        </FormationDiscountContainer>
    );
}

export default FormationDiscount;