import { AppBar, Container, Grid } from "@mui/material";
import HeaderAnim from "../animations/HeaderAnim";
import useResponsive from "../hooks/useResponsive";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

function Header() {
    const isMobile = useResponsive("down", "lg");

    return (
        <AppBar sx={{backgroundColor: "transparent"}}>
            <HeaderAnim>
                <Container maxWidth={false}>
                    <Grid container sx={{...(isMobile && {paddingLeft: "0px", paddingRight: "0px"})} && {...(!isMobile && {paddingLeft: "50px", paddingRight: "50px"})}}>
                        <Grid item xs>
                            <Logo logoWithName={!isMobile} sx={{width: isMobile ? 50 : 200, height: isMobile ? 50 : 70}}/>
                        </Grid>
                        <Grid item xs sx={{ display: "flex", alignItems: "center" }}>
                            {!isMobile && <Menu/>}
                            {isMobile && <MenuMobile/>}
                        </Grid>
                    </Grid>
                </Container>
            </HeaderAnim>
        </AppBar>
    );
}

export default Header;