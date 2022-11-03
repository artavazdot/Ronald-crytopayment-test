import { styled, SxProps, Typography } from "@mui/material";

const PaymentMethodContainer = styled("div")(({theme}) => ({
    width: "500px",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: "3px",
    borderStyle: "solid",
    borderColor:  "#d5d7d9",
    "&:hover": {
        borderColor: "#2ab7ca",
    },
    "&:hover>img": {
        filter: "grayscale(0%)",
    },
    [theme.breakpoints.down("lg")]: {
        width: "80%",
    }
}));
const PaymentMethodName = styled(Typography)(() => ({
    fontSize: "20px"
}));
const PaymentMethodImg = styled("img")(({theme}) => ({
    width: "60px",
    height: "60px",
    filter: "grayscale(100%)",
    [theme.breakpoints.down("sm")]: {
        width: "60px"
    }
}));
interface Props {
    logo: string,
    name: string,
    onClick: Function,
    selected?: boolean,
    sx?: SxProps,
    imgSx?: SxProps,
}

function PaymentMethod({logo, name, onClick, selected = false, sx = {}, imgSx = {}}: Props) {
    return (
        <PaymentMethodContainer onClick={() => onClick()} sx={{...sx, ...(selected && {borderColor: "#2ab7ca"})}}>
            <PaymentMethodName>
                {name}
            </PaymentMethodName>
            <PaymentMethodImg sx={{...(selected && {filter: "grayscale(0%)"}), ...imgSx}} src={logo}/>
        </PaymentMethodContainer>
    );
}

export default PaymentMethod;