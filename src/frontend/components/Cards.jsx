import React from "react";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";

/* 
props:{
    props.key: i,
    props.image: img,
    props.name: name,
    props.description: description,
    props.functionName: funcName
} 
*/

const Cards = (props) => {
    return (


        <Grid
            item
            xs={4}
            sm={4}
            md={3}
            key={props.key}
            justifyContent="center"
            alignItems="center"
        >
            <Card sx={{ maxWidth: "300", height: "100%", width: "100%" }}>
                <CardMedia
                    // image of the card
                    component="img"
                    height={200}
                    image={props.image}
                />
                <CardContent>
                    {/* name of the card */}
                    <Typography gutterBottom variant="h6" component="div">
                        {props.name}
                    </Typography>

                    {/* description of the card */}
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* button to buy the NFT */}
                    <Button
                        variant="contained"
                        sx={{ width: "100%" }}
                        onClick={props.functionName}
                    >
                        {props.price}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Cards;
