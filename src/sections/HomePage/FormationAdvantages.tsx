import { Container, styled, Typography } from "@mui/material";
import { Fragment } from "react";
import { advantages } from "../../common/data";
import FormationAdvantage from "../../components/FormationAdvantage";
import TradingViewTicker from "../../components/TradingViewTicker";
import SectionStyle from "../../styles/SectionStyle";

const FormationAdvantagesContainer = styled(SectionStyle)(() => ({
    minHeight: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "80px",
    paddingBottom: "80px",
}));
const FormationAdvantagesTitle = styled(Typography)(({theme}) => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "45px",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
        fontSize: "35px",
        fontWeight: "400",
        textAlign: "center"
    },
}));
const FormationAdvantageContainer = styled(Container)(({theme}) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
    },
}));

function FormationAdvantages() {
    return (
        <Fragment>
            <TradingViewTicker/>
            <FormationAdvantagesContainer id="formation">
                <FormationAdvantagesTitle variant="h4">CE QUE VOUS OFFRE LE PROGRAMME</FormationAdvantagesTitle>
                <FormationAdvantageContainer>
                    {advantages.map((advantage, index) => <FormationAdvantage key={index} advantage={advantage}/>)}
                </FormationAdvantageContainer>
            </FormationAdvantagesContainer>
        </Fragment>
    );
}

export default FormationAdvantages;