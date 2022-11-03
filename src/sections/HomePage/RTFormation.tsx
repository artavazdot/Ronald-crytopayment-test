import { styled, Typography } from "@mui/material";
import FormationDiscount from "../../components/FormationDiscount";
import SectionStyle from "../../styles/SectionStyle";

const RTFormationContainer = styled(SectionStyle)(() => ({
    minHeight: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
}));
const RTFormationTitle = styled(Typography)(({theme}) => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "45px",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
        fontSize: "35px",
        fontWeight: "400",
        textAlign: "center"
    },
}));

function RTFormation() {
    return (
        <RTFormationContainer>
            <RTFormationTitle variant="h4">ROLAND TRADING MENTORSHIP</RTFormationTitle>
            <FormationDiscount/>
        </RTFormationContainer>
    );
}

export default RTFormation;