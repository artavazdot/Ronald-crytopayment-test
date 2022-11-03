import { styled } from "@mui/material";

const HeaderDiscountContainer = styled("div")(() =>({
    width: "100%",
    height: "34px",
    backgroundColor: "#FF7700"
}));

function HeaderDiscount() {
    return (
        <HeaderDiscountContainer>
        </HeaderDiscountContainer>
    );
}

export default HeaderDiscount;