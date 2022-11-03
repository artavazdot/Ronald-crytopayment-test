import React from 'react';
import { Fragment } from "react";
import { styled, SxProps } from "@mui/material";
import { Helmet } from "react-helmet-async";

const PageContainer = styled("div")(() => ({
}));
interface Props {
    children: React.ReactNode,
    title: string,
    sx?: SxProps
}

function Page({children, title = "", sx = {}}: Props) {
    const finalTitle = title === "" ? "Roland Trading" : title+" | Roland Trading";

    return (
        <Fragment>
            <Helmet>
                <title>{finalTitle}</title>
            </Helmet>
            <PageContainer sx={{ ...sx }}>
                {children}
            </PageContainer>
        </Fragment>
    );
}

export default Page;