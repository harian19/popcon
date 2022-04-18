import * as React from 'react';
import './ReviewCard.css'
import { Divider, Typography } from '@mui/material';
import Review from "./Review";
import CardContainer from "./CardContainer";
import { item_data } from "../static/item_data";

export default function ReviewCard () {
    return (
        <CardContainerWithHeader name={item_data.name} year={item_data.year}>
            <Review data={item_data}/>
        </CardContainerWithHeader>
    );
}

export function CardContainerWithHeader (props) {
    return (
        <CardContainer>
            <div className="item-header">
                <Typography align="left" variant="h5" gutterBottom>
                    {props.name + " (" + props.year + ")"}
                </Typography>
                <Divider/>
            </div>
            {props.children}
        </CardContainer>
    );
}