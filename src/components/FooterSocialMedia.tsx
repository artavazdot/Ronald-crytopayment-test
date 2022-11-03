import { styled } from "@mui/material";
import { ReactNode } from "react";

const FooterSocialMediaContainer = styled("a")(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textDecoration: "none",
    color: "#474747",
}));
interface Propos {
    socialLink: string,
    icon: ReactNode,
}
function FooterSocialMedia({socialLink, icon}: Propos) {
    return (
        <FooterSocialMediaContainer target="_blank" href={socialLink}>
            {icon}
        </FooterSocialMediaContainer>
    );
}

export default FooterSocialMedia;