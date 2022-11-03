import { Button, styled, Typography } from "@mui/material";
import SectionStyle from "../../styles/SectionStyle";
import TypewriterComponent, { TypewriterClass } from "typewriter-effect";
import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import { CLIENT_PAGES } from "../../routes/paths";

const HomeHeroContainer = styled(SectionStyle)(({theme}) => ({
    width: "calc(100% - 100px)",
    paddingLeft: "50px",
    paddingRight: "50px",
    minHeight: "80vh",
    color: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2AB7CA12",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column"
    },
}));
const HomeHeroLeftContainer = styled("div")(({theme}) => ({
    minWidth: "600px",
    maxWidth: "45%",
    minHeight: "500px",
    margin: "40px",
    marginTop: "70px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    [theme.breakpoints.down("md")]: {
        maxWidth: "100%",
        minWidth: "300px",
    },
}));
const HomeHeroLeftTitle = styled(Typography)(({theme}) => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "64px",
    fontWeight: 800,
    color: "#000000",
    [theme.breakpoints.down("md")]: {
        fontSize: "2.5em",
        textAlign: "center",
    },
}));
const HomeHeroLeftSubTitle = styled(Typography)(({theme}) => ({
    fontSize: "2em",
    color: "#2ab7ca",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.6em",
        textAlign: "center"
    },
}));
const HomeHeroLeftText = styled(Typography)(({theme}) => ({
    maxWidth: "700px",
    fontSize: "1.3em",
    color: "#808080",
    [theme.breakpoints.down("md")]: {
        fontSize: "1.2em",
        textAlign: "center"
    },
}));
const HomeHeroRightContainer = styled("div")(({theme}) => ({
    minWidth: "450px",
    minHeight: "400px",
    margin: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
        minWidth: "300px",
        minHeight: "200px",
    },
}));
const HomeHeroButtonContainer = styled("div")(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    }
}));
const HomeHeroButton = styled(Button)(({theme}) => ({
    minWidth: "320px",
    maxWidth: "450px",
    height: "57px",
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: 700,
    borderRadius: "90px",
    backgroundColor: '#2ab7ca',
    '&:hover': {
        backgroundColor: '#2ab7ca',
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
        minWidth: "320px",
        height: "60px",
    },
}));
const HomeHeroImageContainer = styled("div")(({theme}) => ({
    position: "relative",
    width: "70%",
    minWidth: "40vw",
    borderRadius: "33px",
    marginTop: "80px",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
        marginTop: "0px",
    },
}));
const HomeHeroImage = styled("img")(() => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    border: "5px solid #2AB7CA",
    borderRadius: "33px",
}));
const HomeHeroVideo = styled("video")(({theme}) => ({
    width: "70%",
    minWidth: "40vw",
    display: "none",
    objectFit: "cover",
    border: "5px solid #2AB7CA",
    borderRadius: "33px",
    [theme.breakpoints.down("lg")]: {
        width: "100%",
    },
}));
const HomeHeroVideoPlayContainer = styled("div")(() => ({
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
const PlayBtn = styled("div")(() => ({
}));
const HomeHeroVideoPlay = styled(Player)(() => ({
    width: "300px",
    height: "300px",
    cursor: "pointer",
}));

function HomeHero() {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const playVideo = () => {
        setVideoPlaying(true);
        const video: HTMLMediaElement = document.getElementById("RTVideo") as HTMLMediaElement;
        video?.play();
    }

    const heroTextAnim = (typewriter: TypewriterClass) => {
        typewriter.typeString("Rejoins le programme RTM")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Deviens enfin rentable !")
        .pauseFor(2000)
        .deleteAll()
        .typeString("Vis de ton trading !")
        .pauseFor(2000)
        .deleteAll()
        .start();
    }
    
    return (
        <HomeHeroContainer id="home">
            <HomeHeroLeftContainer>
                <HomeHeroLeftTitle variant="h1">Roland Trading Mentorship.</HomeHeroLeftTitle>
                <HomeHeroLeftSubTitle variant="h2"><TypewriterComponent onInit={heroTextAnim} options={{loop: true}}/></HomeHeroLeftSubTitle>
                <HomeHeroLeftText variant="h4">RTM te donne la chance de rejoindre le meilleur programme éducatif en Trading dans la communauté francophone.</HomeHeroLeftText>
                <HomeHeroButtonContainer>
                    <HomeHeroButton href={CLIENT_PAGES.signUp} variant="contained">
                        REJOINDRE LE PROGRAMME
                    </HomeHeroButton>
                </HomeHeroButtonContainer>
            </HomeHeroLeftContainer>
            <HomeHeroRightContainer>
                <HomeHeroVideo id="RTVideo" sx={{display: videoPlaying ? "block" : "none"}} controls src="https://firebasestorage.googleapis.com/v0/b/roland-trading-prod.appspot.com/o/RTM%20Video%20presentation.mp4?alt=media&token=10892d6b-04cf-44db-a69b-d245aa5f70df"/>
                <HomeHeroImageContainer sx={{display: !videoPlaying ? "block" : "none"}}>
                    <HomeHeroImage src="/images/video-overview.jpg"/>
                    <HomeHeroVideoPlayContainer>
                        <PlayBtn onClick={playVideo}>
                            <HomeHeroVideoPlay src="/lottiefiles/play.json" autoplay loop/>
                        </PlayBtn>
                    </HomeHeroVideoPlayContainer>
                </HomeHeroImageContainer>
            </HomeHeroRightContainer>
        </HomeHeroContainer>
    );
}

export default HomeHero;