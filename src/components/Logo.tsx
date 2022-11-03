import { Fragment } from "react";
import { styled, SxProps } from "@mui/material";
import { CLIENT_PAGES } from "../routes/paths";
import { Link } from "react-router-dom";

const Image = styled("img")(() => ({
  objectFit: "contain"
}));
interface Props {
  disableLink?: boolean,
  logoWithName?: boolean,
  sx?: SxProps,
};

function Logo({disableLink = false, logoWithName = false, sx = {}}: Props) {

  const logo = (
    <Fragment>
      {logoWithName && <Image sx={{ width: 40, height: 40, ...sx }} src="/images/logo with name.png" alt="Logo" width="100%" height="100%"/>}
      {!logoWithName && <Image sx={{ width: 40, height: 40, ...sx }} src="/images/logo.png" alt="Logo" width="100%" height="100%"/>}
    </Fragment>
  );

  if (disableLink) {
    return logo;
  }

  return <Link to={CLIENT_PAGES.home}>{logo}</Link>;
}

export default Logo;
