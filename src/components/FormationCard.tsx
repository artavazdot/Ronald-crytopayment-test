import { styled, Typography } from "@mui/material";

const FormationCardContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    border: "1px solid #d5d7d9",
    borderRadius: ".5rem"
}));
const FormationCardImg = styled("img")(({theme}) => ({
    width: "358px",
    height: "185px",
    alignSelf: "center",
    margin: "12px",
    borderRadius: ".5rem",
    [theme.breakpoints.down("md")]:  {
        width: "100%",
        height: "180px",
    }
}));
const FormationTitle = styled(Typography)(() => ({
    margin: "12px",
    marginBottom: "0px",
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "17px",
}));
const FormationPrice = styled(Typography)(() => ({
    marginLeft: "12px",
}));

function FormationCard() {
    return (
        <FormationCardContainer>
            <FormationCardImg src="/images/RTM2.png"/>
            <FormationTitle>ROLAND TRADING MENTORSHIP</FormationTitle>
            <FormationPrice>$350</FormationPrice>
        </FormationCardContainer>
    );
}

export default FormationCard;