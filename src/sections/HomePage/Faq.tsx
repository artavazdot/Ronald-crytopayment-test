import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from "@mui/material";
import { useState } from 'react';
import { faq } from '../../common/data';
import SectionStyle from '../../styles/SectionStyle';

const FaqContainer = styled(SectionStyle)(() => ({
    paddingTop: "40px",
    paddingBottom: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}));
const FaqTitle = styled(Typography)(({theme}) => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "45px",
    fontWeight: 800,
    [theme.breakpoints.down("md")]: {
        fontSize: "35px",
        fontWeight: "400",
        textAlign: "center"
    },
}));
const FaqQuestionsContainer = styled("div")(({theme}) => ({
    width: "900px",
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("lg")]: {
        width: "65%",
    },
    [theme.breakpoints.down("md")]: {
        width: "85%",
    },
}));
const CustomAccordion = styled(Accordion)(() => ({
    marginTop: "10px",
    "&:before": {
        backgroundColor: "rgba(0, 0, 0, 0)",
    }
}));
const CustomAccordionSummary = styled(AccordionSummary)(() => ({
    backgroundColor: "#F5F5F5C7",
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
    fontSize: "24px",
    fontWeight: 800,
    color: "#6B6A6A",
}));
const CustomAccordionSummaryText = styled(Typography)(({theme}) => ({
    fontFamily: "InterBold,sans-serif !important",
    fontSize: "24px",
    fontWeight: 800,
    color: "#6B6A6A",
    [theme.breakpoints.down("md")]: {
        fontSize: "20px",
    },
}));
const AccordionDetailsText = styled(Typography)(({theme}) => ({
    fontSize: "20px",
    fontWeight: 500,
    color: "#6B6A6A",
    [theme.breakpoints.down("md")]: {
        fontSize: "18px",
    },
}));

function Faq() {
    const [activeAccordion, setActiveAccordion] = useState(0);

    const toggleActiveAccordion = (index: number) => {
        if(index === activeAccordion)
            setActiveAccordion(-1);
        else
            setActiveAccordion(index);
    }

    return (
        <FaqContainer>
            <FaqTitle variant="h4">QUESTIONS FRÉQUENTES</FaqTitle>
            <FaqQuestionsContainer>
                {faq.map((question, index) =>
                    <CustomAccordion key={index} elevation={0} expanded={index === activeAccordion} onClick={() => toggleActiveAccordion(index)}>
                        <CustomAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header"><CustomAccordionSummaryText>{question.question}</CustomAccordionSummaryText></CustomAccordionSummary>
                        <AccordionDetails sx={{backgroundColor: "#F5F5F5C7", borderBottomRightRadius: "15px", borderBottomLeftRadius: "15px"}}><AccordionDetailsText>{question.answer}</AccordionDetailsText></AccordionDetails>
                    </CustomAccordion>
                )}
            </FaqQuestionsContainer>
        </FaqContainer>
    );
}

export default Faq;