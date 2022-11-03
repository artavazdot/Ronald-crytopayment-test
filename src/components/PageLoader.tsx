import React from "react";
import { styled } from "@mui/material";

const LoaderContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));
const PagesContainer = styled("div")(() => ({
  width: "100%",
  height: "100%",
}));
const AnimationContainer = styled("div")(() => ({
  position: "fixed",
  top: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 1)",
}));
interface Props {
  isLoading: boolean,
  children: React.ReactNode
}

function PagesLoader({ isLoading, children }: Props) {
  return (
    <LoaderContainer>
      <PagesContainer>
        { children }
      </PagesContainer>
      <AnimationContainer sx={{ display: isLoading ? "flex" : "none" , ...(isLoading && { zIndex : 10000 })}}>
        Laoding
      </AnimationContainer>
    </LoaderContainer>
  );
}

export default PagesLoader;