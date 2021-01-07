import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';


export default class Success extends Component {
    render() {
        return (
            <>
               <AppBar position="static">
                    <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography style={styles.center}>Data was succesfully sent ! </Typography> 
                    </Toolbar>
                </AppBar>
                <br/>
                <Typography>Thank you!</Typography> 
                <Typography>You will receive a confirmation email.</Typography> 
                <br/>
               
            </>
        )
    }
}
const styles = {
    center: {
        margin: "auto",
        fontSize: 24,
        color: '#E0E0E0'
    },
   
}