import * as React from 'react';
import './Review.css'
import { Button, Rating,
    Grid, TextField, Typography, Slider } from '@mui/material';
import ItemImageAndWishlist from "./ItemImageAndWishlist";



export default function Review (props) {
    return (
        <div>
        <ItemImageAndWishlist img={props.data.image}/>
        <Grid className="item-review-container" container rowSpacing={4}>
            <Grid item xs={4}>
                <div className="progress-text">
                    <Typography variant="button">
                        Progress
                    </Typography>
                </div> 
                <Slider 
                className="slider"
                min={0}
                max={100}
                marks={marks}
                step={1}
                valueLabelDisplay="auto"/>
                <div className="update-status-button-container">
                    <Button variant="outlined">
                        Update Status
                    </Button>
                </div>
            </Grid>
            <Grid item xs={8}/>
            <div className="rating-container">
                <Grid container rowSpacing={2}>
                    <Grid item xs={12}>
                            <Rating 
                            className="rating" 
                            name="simple-controlled" 
                            size="large"
                            precision={0.5} />
                    </Grid>
                    <Grid item xs={12}>
                        <div className="rate-button-container">
                            <Button size="small" variant="outlined">
                                Rate    
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <Grid item xs={12}>
                <div className="review-textfield-container">
                    <TextField 
                    placeholder="Your Review goes here..."
                    multiline 
                    fullWidth 
                    minRows={8}
                    maxRows={16}
                    variant="outlined"/>
                </div>
                <div className="submit-review-button-container">
                    <Button variant="outlined">
                        Submit Review
                    </Button>
                </div>
            </Grid>
        </Grid>
        </div>
        
    )
}

const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 50,
      label: '50%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];