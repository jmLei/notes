import React from "react";

import Header from "./Header";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import "./NotePage.css";

const NotePage = () => {
    return(
        <React.Fragment> 
            <Header/>   
            <br/>
            <br/>
            <br/>
            <br/>
            <Grid container>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={4}>
                    <Card>
                        <TextField 
                            fullWidth
                            label="New Note..."
                            size="small" 
                            variant="filled" 
                        />
                    </Card> 
                </Grid> 
            </Grid> 
        </React.Fragment>
    )
};

export default NotePage;