import { styled, Typography } from "@mui/material";
import SectionStyle from "../../styles/SectionStyle";

const FormationHoursContainer = styled(SectionStyle)(({theme}) => ({
    height: "300px",
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#2ACAB714",
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        minHeight: "auto",
    }
}));
const FormationHoursLeft = styled("div")(({theme}) => ({
    width: "50%",
    marginLeft: "5%",
    height: "calc(100% - 40px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: "20px",
    [theme.breakpoints.down("lg")]: {
        marginLeft: "0%",
        width: "calc(100% - 20px)",
        padding: "10px",
    }
}));
const FormationHoursLeftTitle = styled(Typography)(({theme}) => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "40px",
    fontWeight: 900,
    color: "#6B6A6A",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
        fontSize: "40px",
        textAlign: "center"
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        fontWeight: "400",
        textAlign: "center"
    },
}));
const FormationHoursLeftSubTitle = styled(Typography)(({theme}) => ({
    width: "80%",
    fontSize: "20px",
    fontWeight: 600,
    color: "#808080",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
        textAlign: "center"
    },
}));
const FormationHoursRightImg = styled("img")(({theme}) => ({
    height: "300px",
    marginRight: "5%",
    zIndex: 1,
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));

function FormationHours() {
    return (
        <FormationHoursContainer>
            <FormationHoursLeft>
                <FormationHoursLeftTitle>ACCÉDEZ À PLUS DE 30 HEURES DE CONTENUS EXCLUSIFS</FormationHoursLeftTitle>
                <FormationHoursLeftSubTitle>BIEN PENSÉ ET PÉDAGOGIQUE POUR FACILITER L'ASSIMILATION</FormationHoursLeftSubTitle>
            </FormationHoursLeft>
            <FormationHoursRightImg src="/images/formation-hours.png"/>
        </FormationHoursContainer>
    );
}

export default FormationHours;