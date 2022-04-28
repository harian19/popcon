import * as React from 'react';
import './ReviewCard.css'
import { Button, Divider, Typography } from '@mui/material';
import Review from "./Review";
import CardContainer from "./CardContainer";
import { item_data } from "../static/item_data";

export default function ReviewCard () {
    return (
        <CardContainerWithHeader title={item_data.name + " (" + item_data.year + ")"}>
            <Review data={item_data}/>
        </CardContainerWithHeader>
    );
}

export function CardContainerWithHeader (props) {
    return (
        <div>
                    <CardContainer>
                    <div className="item-header">
                        <Typography 
                        sx={{fontSize:"22px"}} 
                        variant="button"
                        color="primary">
                            {props.title}
                        </Typography>
                    </div>
                    <Divider sx={{marginBottom:"20px"}}/>
                    {props.children}
                </CardContainer>
        </div>
        
    );
}