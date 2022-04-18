


 import { Typography, Card, CardContent } from "@mui/material";
import * as React from 'react';
import "./DetailsCard.css"

export default function DetailsCard(props) {
    return (
        <Card sx={{background:"none"}} className="details-card" variant="elevation" raised>
            <CardContent>
                <Typography variant="h5">
                    Genre
                </Typography>
                <Typography color="text.secondary" variant="body">
                    {props.details.genre}
                </Typography>
                <Typography variant="h5">
                    Director
                </Typography>
                <Typography color="text.secondary" variant="body">
                    {props.details.director}
                </Typography>
                <Typography variant="h5">
                    Stars
                </Typography>
                <Typography color="text.secondary" variant="body">
                    {props.details.stars.map(star => {
                        return (
                            <div>
                                {star}
                            </div>
                        )
                    })}
                </Typography>
            </CardContent>
        </Card>
    )
}