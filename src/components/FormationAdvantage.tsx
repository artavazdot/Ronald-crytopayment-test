import { CheckCircleOutline } from "@mui/icons-material";
import { Container, Grid, styled, Typography } from "@mui/material";
import { AdvantagesModel } from "../models/AdvantageModel";

const FormationAdvantageContainer = styled("div")(({theme}) => ({
    width: "350px",
    height: "350px",
    display: "flex",
    margin: "20px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "#2ab7ca",
    backgroundColor: "#000000",
    borderBottom: "4px solid #2ab7ca",
    "&:hover": {
        color: "white",
        backgroundColor: "#2ab7ca",
        borderBottom: "4px solid #000000",
        cursor: "pointer",
    },
    "&:hover img": {
        filter: "brightness(0) invert(1)",
    },
    [theme.breakpoints.down("sm")]: {
        width: "auto",
        minWidth: "250px",
    }
}));
const FormationAdvantageImg = styled("img")(() => ({
    width: "70px",
    height: "70px",
    marginBottom: "30px",
}));
const TitleContainer = styled(Typography)(() => ({
    fontFamily: "InterBold,sans-serif !important",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    fontSize: "20px",
    fontWeight: 800,
}));
const Advantage = styled(Typography)(() => ({
    marginTop: "25px",
    display: "flex",
    alignItems: "center",
    color: "#FFFFFF",
}));
interface Props {
    advantage: AdvantagesModel
}

function FormationAdvantage({advantage}: Props) {
    return (
        <FormationAdvantageContainer>
            <Container>
                <FormationAdvantageImg src={`/images/${advantage.image}.png`} alt={advantage.title} />
                <TitleContainer>{advantage.title}</TitleContainer>
                <Grid container>
                    {advantage.subAdvantages.map((subAdvantage, index) => <Grid key={index} item xs={12}><Advantage><CheckCircleOutline sx={{marginRight: "10px"}}/>{subAdvantage}</Advantage></Grid>)}
                </Grid>
            </Container>
        </FormationAdvantageContainer>
    );
}

export default FormationAdvantage;