import { Email, Instagram, Telegram, YouTube } from "@mui/icons-material";
import { Container, Grid, styled, Typography } from "@mui/material";
import useResponsive from "../hooks/useResponsive";
import FooterStyle from "../styles/FooterStyle";
import FooterSocialMedia from "./FooterSocialMedia";
import Logo from "./Logo";
import Menu from "./Menu";

const FooterContainer = styled(FooterStyle)(({theme}) => ({
    width: "calc(100% - 150px)",
    minHeight: "300px",
    padding: "75px",
    paddingBottom: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "rgb(82, 89, 101)",
    fontWeight: "300",
    backgroundColor: "#1e222d",
    [theme.breakpoints.down("md")]: {
        width: "calc(100% - 80px)",
        padding: "40px",
    },
    [theme.breakpoints.down("sm")]: {
        width: "calc(100% - 60px)",
        padding: "30px",
    },
}));
const SocialMediaContainer = styled(Grid)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        marginTop: "20px",
    }
}));

function Footer() {
    const hideMenu = useResponsive("down", "lg");
    const isMobile = useResponsive("down", "md");

    return (
        <FooterContainer>
            <Container maxWidth={false}>
                <Grid container>
                    <Grid item xs={12} md={10} container>
                        <Grid item xs={3}>
                            {!isMobile && <Logo sx={{width: 100, height: 100}}/>}
                        </Grid>
                        <Grid item xs={9} sx={{display: "flex", justifyContent: "center"}}>{!hideMenu && <Menu menuItemSx={{color: "white"}}/>}</Grid>
                        <Grid item xs={12}>
                            <Typography component="div" marginTop="20px">
                                <Typography component="span" fontWeight="bold">AVERTISSEMENT : </Typography>
                                Le trading financier offre un grand potentiel de récompenses, mais aussi un grand potentiel de risques.
                                Vous devez être conscient des risques et être prêt à les accepter afin de négocier sur les marchés financiers.
                                Je ne suis pas un conseiller financier agréé/certifié, tout le contenu du programme est à des fins éducatives uniquement.
                                Roland Trading ne sera pas tenu responsables des actions et /ou décision que vous entreprendrez à la suite de ce que vous apprendrez ou verrez dans ce programme.
                                Toute transaction effectuée, et toute perte/profits réalisés sur les marchés financiers sont à votre discrétion et sous votre propre RESPONSABILITÉ.
                                Tout doit être expérimenté, testé en démo et toutes décisions concernant des investissements de TOUT TYPE sont entièrement de VOTRE ressort.
                            </Typography>
                            <Typography component="div" marginTop="20px">
                                <Typography component="span" fontWeight="bold">POLITIQUE DE REMBOURSEMENT : </Typography>
                                Une fois que vous aurez payé et obtenus l'accès aux contenus du programme RTM, les services sont considérés comme rendu et
                                aucun remboursement ne sera accepté, sauf exception faite par Roland Trading.
                            </Typography>
                        </Grid>
                    </Grid>
                    <SocialMediaContainer item xs container>
                        <Grid item xs md={12} sx={{display: "flex", justifyContent: isMobile ? "center" : "flex-end", alignItems: "end"}}><FooterSocialMedia socialLink="https://www.youtube.com/c/RolandTrading" icon={<YouTube sx={{color: "#C4302B", fontSize: "50px"}}/>}/></Grid>
                        <Grid item xs md={12} sx={{display: "flex", justifyContent: isMobile ? "center" : "flex-end", alignItems: "end"}}><FooterSocialMedia socialLink="https://www.instagram.com/roland.trading" icon={<Instagram sx={{color: "#DD2A7B", fontSize: "50px"}}/>}/></Grid>
                        <Grid item xs md={12} sx={{display: "flex", justifyContent: isMobile ? "center" : "flex-end", alignItems: "end"}}><FooterSocialMedia socialLink="https://t.me/rolandgael" icon={<Telegram sx={{color: "#0088CC", fontSize: "50px"}}/>}/></Grid>
                        <Grid item xs md={12} sx={{display: "flex", justifyContent: isMobile ? "center" : "flex-end", alignItems: "end"}}><FooterSocialMedia socialLink="mailto:info@rolandtrading.net" icon={<Email sx={{color: "white", fontSize: "50px"}}/>}/></Grid>
                    </SocialMediaContainer>
                </Grid>
            </Container>
            <Typography marginTop="20px" color="whitesmoke">© 2022 RTM. All rights reserved.</Typography>
        </FooterContainer>
    );
}

export default Footer;