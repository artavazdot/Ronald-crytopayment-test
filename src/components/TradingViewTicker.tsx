import { Container, styled, SxProps } from "@mui/material";
import { TickerTape } from "react-tradingview-embed";
import useResponsive from "../hooks/useResponsive";

const TradingViewTickerContainer = styled(Container)(() => ({
    backgroundColor: "#1e222d",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px"
}));
interface Props {
    sx?: SxProps
}

function TradingViewTicker({sx = {}}: Props) {
    const isMobile = useResponsive("down", "md");
    return (
        <TradingViewTickerContainer sx={{...sx}} maxWidth={false}>
            <TickerTape widgetProps={{colorTheme: "dark", isTransparent: true, showSymbolLogo: !isMobile}} />
        </TradingViewTickerContainer>
    );
}

export default TradingViewTicker;