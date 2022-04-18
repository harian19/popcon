import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Rating } from "@mui/material";
import "./UserReviewsAccordion.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function UserReviewAccordion(props) {
  const [expanded, setExpanded] = React.useState(props.reviews[0]? props.reviews[0].reviewId: false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  function getReviewsAccordion(reviews) {
    return reviews.map(review => {
        return (
        <Accordion 
        className="accordion" 
        expanded={expanded === review.reviewId} 
        onChange={handleChange(review.reviewId)}>
            <AccordionSummary id={review.reviewId}>
                <Typography variant="body" sx={{ width: "50%" }}>
                    {review.name}
                </Typography>
                <Rating
                readOnly 
                value={review.rating} 
                precision={0.5}/>
                <Typography 
                variant="body2" 
                color="text.secondary" 
                sx={{width: "50%", display:"flex", justifyContent:"flex-end"}}> 
                    {review.datetime}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                {review.reviewText}
            </Typography>
            </AccordionDetails>
        </Accordion>
        )
    });
  }

  return (
    <div>
        {getReviewsAccordion(props.reviews)}
    </div>
  );
}
