import { Button, Chip, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import "./Collection.css"

export default function Collection(props) {
return (
    <div>
        <Grid container columnSpacing={3}>
            {getCategoryPapers(props.collection)}
        </Grid>
    </div>
    )
}

function getCategoryPapers(collection) {
    return(
        ["Books", "Movies", "TV Shows", "Games"].map(category => {
            return (
                <Grid item xs={3}>
                    <link rel="stylesheet" href="scroll-hint.css"></link>
                    <script src="scroll-hint.min.js"></script>
                    <Paper >
                        <Typography className="category-header" variant="h6" color="primary">
                                {category.toUpperCase()}
                        </Typography>
                        <Divider/>
                        <div className="list-container js-scrollable">
                            <List>
                                {collection[category].map(item => {
                                    return (
                                        <ListItem>
                                            <ListItemButton>
                                                <ListItemText>
                                                    <Typography align="center" variant="body" color="primary">
                                                        {item.title}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItemButton>
                                            
                                        </ListItem>
                                    ) 
                                })}
                            </List>
                        </div>
                        
                    </Paper>
                </Grid>
            )
        })
        
    )
    
}