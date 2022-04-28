import * as React from 'react';
import { user_data } from "../static/user_data";
import Collection from "./Collection";
import { CardContainerWithHeader } from "./ReviewCard";
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import Favorite from "@mui/icons-material/Favorite";

export default function MyCollectionAndWishListCards () {
    return (
        <div>
            <CardContainerWithHeader title="My Collection" icon={<PlaylistAddCheckIcon/>}>
                <Collection 
                collection={user_data.collection} />
            </CardContainerWithHeader>
            <CardContainerWithHeader title="Wish List" icon={<Favorite/>}>
                <Collection collection={user_data.wishlist}/>
            </CardContainerWithHeader>
        </div>
    );
}