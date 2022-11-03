import { styled, Toolbar } from "@mui/material";
import { ReactNode } from "react";
import { HeaderConfig } from "../common/MenuConfig";
import useOffSetTop from "../hooks/useOffSetTop";

const HeaderAnimContainer = styled(Toolbar)(({ theme }) => ({
    position: "fixed",
    top: 0,
    width: "100%",
    padding: "0px !important",
    height: HeaderConfig.MAX_HEIGHT,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(20px)",
    backgroundColor: "white",
    transition: theme.transitions.create(["height", "boxShadow", "backgroundColor"], {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.shorter,
    }),
}));
interface Props {
    children: ReactNode,
}

function HeaderAnim({children}: Props) {
    const isOffset = useOffSetTop(HeaderConfig.HEIGHT);

    return (
        <HeaderAnimContainer sx={{ ...(isOffset && { backgroundColor: "rgba(255,255,255,0.7)", height: {md: HeaderConfig.HEIGHT}, boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"})}}>
            {children}
        </HeaderAnimContainer>
    );
}

export default HeaderAnim;