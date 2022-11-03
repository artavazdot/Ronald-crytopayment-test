import { Menu } from "@mui/icons-material";
import { ClickAwayListener, Container, IconButton, styled, Typography } from "@mui/material";
import { useState } from "react";
import FadeInRight from "../animations/FadeInRight";
import { ClientMenuItems, HeaderConfig } from "../common/MenuConfig";

const MenuMobileContainer = styled(Container)(() => ({
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));
const MenuMobileBtn = styled(IconButton)(() => ({
    color: "#2ab7ca",
    '&:hover': {
        color: '#2ab7ca',
    },
}));
const MenuMobileItemContainer = styled("div")(() => ({
    position: "absolute",
    top: HeaderConfig.HEIGHT,
    right: "5px",
    minWidth: "200px",
    minHeight: "250px",
    display: "none",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(30px)",
    boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
}));
const MenuMobileItem = styled("a")(() => ({
    textDecoration: "none",
    color: "black",
    '&:hover': {
        color: '#2ab7ca',
    },
}));
const MenuMobileItemSignUp = styled(MenuMobileItem)(() => ({
    width: "160px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px",
    borderRadius: "50px",
    color: "white",
    border: "1px solid #2ab7ca",
    backgroundColor: '#2ab7ca',
    '&:hover': {
        color: "#2ab7ca",
        backgroundColor: 'rgba(255,255,255, 0)',
    },
}));
const MenuMobileItemText = styled(Typography)(() => ({
    fontSize: "18px",
}));
function MenuMobile() {
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const toggleMenu = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    const onClickAway = () => {
        setMenuIsVisible(false);
    }

    return (
        <ClickAwayListener onClickAway={onClickAway}>
            <MenuMobileContainer>
                <MenuMobileBtn onClick={toggleMenu} children={<Menu sx={{fontSize: "35px"}}/>}/>
                    <MenuMobileItemContainer sx={{display: menuIsVisible ? "flex" : "none"}}>
                    {
                        ClientMenuItems.map((menu, index) => {
                            if(index < ClientMenuItems.length - 1)
                                return <MenuMobileItem key={index} onClick={toggleMenu} href={menu.path}><MenuMobileItemText>{menu.title}</MenuMobileItemText></MenuMobileItem>
                            return <FadeInRight key={index} start={menuIsVisible}><MenuMobileItemSignUp onClick={toggleMenu} target="_blank" href={menu.path}><MenuMobileItemText>{menu.title}</MenuMobileItemText></MenuMobileItemSignUp></FadeInRight>
                        })
                    }
                </MenuMobileItemContainer>
            </MenuMobileContainer>
        </ClickAwayListener>
    );
}

export default MenuMobile;