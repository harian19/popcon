import * as React from 'react';
import './ItemCard.css';
import ItemImageAndWishlist from "./ItemImageAndWishlist";
import { CardContainerWithHeader } from "./ReviewCard";
import ItemRatingAndDetails from "./ItemRatingAndDetails";
import { Divider, Typography } from "@mui/material";
import UserReviewAccordion from "./UserReviewsAccordion";
import { item_data } from "./../static/item_data";

export default function ItemCard () {
    return (
        <CardContainerWithHeader title={item_data.name + " (" + item_data.year +")"}>
            <ItemImageAndWishlist
            img={item_data.image}/>
            <ItemRatingAndDetails
            popConRating={item_data.popConRating}
            userRating={item_data.userRating}
            details={item_data.details}/>
            <Divider textAlign="center">
                <Typography variant="h6" color="text.secondary">
                    User Reviews
                </Typography>
            </Divider>
            <div className="user-review-accordion">
                <UserReviewAccordion
                reviews={item_data.userReviews}/>
            </div>
        </CardContainerWithHeader>
    );
}