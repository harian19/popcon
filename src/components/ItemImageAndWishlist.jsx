import { useState } from "react";
import { Avatar, Grid, Fab } from '@mui/material';
import './ItemImageAndWishlist.css'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"


export default function ItemImageAndWishlist(props) {

    const [isWishList, setWishList] = useState(false);

    return (
        <div className="item-image-wishlist-container">
        <Grid container>
            <Grid item xs={10}>
                <div>
                        <Avatar
                        variant="rounded"
                        src={props.img}
                        sx={{ width: 200, height: 200 }}
                        alt="Image not found"/>
                </div>
            </Grid>
            <Grid className="wishlist-container" item xs={2}>
                <Fab 
                onClick={() => setWishList(!isWishList)}
                color="secondary"
                variant="extended"
                label="Add to WishList" 
                aria-label="like">
                    {
                    isWishList? 
                        <FavoriteIcon 
                        sx={{marginRight: "10px"}} /> 
                        : <FavoriteBorderIcon 
                        sx={{marginRight: "10px"}} />
                    }
                    WishList
                </Fab>
            </Grid>
        </Grid>
        </div>
    )
}