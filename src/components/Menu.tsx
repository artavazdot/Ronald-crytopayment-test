import { Container, styled, SxProps, Typography } from "@mui/material";
import { ClientMenuItems } from "../common/MenuConfig";

const MenuContainer = styled(Container)(() => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
}));
const MenuItem = styled("a")(() => ({
    width: "140px",
    textAlign: "end",
    marginRight: "40px",
    textDecoration: "none",
    color: "black",
    '&:hover': {
        color: '#2ab7ca',
    },
}));
const MenuItemSignUp = styled(MenuItem)(() => ({
    width: "160px",
    height: "50px",
    marginRight: "0px",
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
const MenuItemText = styled(Typography)(() => ({
    fontSize: "18px",
}));
interface Props {
    menuItemSx?: SxProps
}
function Menu({menuItemSx = {}}: Props) {
    return (
        <MenuContainer>
            {
                ClientMenuItems.map((menu, index) => {
                    if(index < ClientMenuItems.length - 1)
                        return <MenuItem sx={{...menuItemSx}} key={index} href={menu.path}><MenuItemText>{menu.title}</MenuItemText></MenuItem>
                    return <MenuItemSignUp key={index} href={menu.path}><MenuItemText>{menu.title}</MenuItemText></MenuItemSignUp>
                })
            }
        </MenuContainer>
    );
}

export default Menu;