import { Chip, Typography } from "@mui/material"
import { user_data } from "../static/user_data"
import "./UserType.css"

export default function UserType() {
return (
    <div>
        <div className="name">
            <Typography variant="h4">
                {user_data.name}
            </Typography>
        </div>

        <Chip sx={{marginRight:"10px"}} color= {user_data.superReader ? "success" : "default"} label="Reader Rabbit" />
        <Chip sx={{marginRight:"10px"}} color= {user_data.superGamer ? "success" : "default"} label= "Gamer Goat" />
        <Chip sx={{marginRight:"10px"}} color= {user_data.movieBuff ? "success" : "default"} label="Movie Monkey" />
        <Chip sx={{marginRight:"10px"}} color= {user_data.superTVShowWatcher ? "success" : "default"} label="TV Toucan" />
        <Chip sx={{marginRight:"10px"}} color= {user_data.superReviewer ? "success" : "default"} label="Super Reviewer" />

    </div>
    )
}