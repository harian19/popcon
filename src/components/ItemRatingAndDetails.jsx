import StarsIcon from '@mui/icons-material/Stars';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import { Rating, Grid, Typography } from "@mui/material";
import * as React from 'react';
import DetailsCard from "./DetailsCard";
import "./ItemRatingAndDetails.css"

export default function ItemRatingAndDetails(props) {
    return (
        <div className="item-rating-details-container">
            <Grid container rowSpacing={2}>
                <Grid item xs={4}>
                    <Typography className="rating-label" component="legend">popCon Rating</Typography>
                    <Rating
                    icon={<StarsIcon fontSize="inherit"/>}
                    emptyIcon={<StarsOutlinedIcon fontSize="inherit"/>}
                    size="large" 
                    readOnly 
                    value={props.popConRating} 
                    precision={0.5}/>
                </Grid>
                <Grid item xs={4}>
                    <Typography className="rating-label" component="legend">User Rating</Typography>
                    <Rating size="large" readOnly value={props.userRating} precision={0.5}/>
                </Grid>
            </Grid>
            <div className="details-container">
                <DetailsCard details={props.details}/>
            </div>
        </div>
    )
}