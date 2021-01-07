import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


export default class UserData extends Component {
    continue = () => {
        this.props.nextStep();
    }
    
    
    render() {
       
        const {firstName, lastName, userName, passWord, email } = this.props.values;
        return (
           // <ThemeProvider>
                <>
                    <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                        <Typography style={styles.center}>Enter User Details </Typography> 
                    </Toolbar>
                    </AppBar>
                    <br/>
                    <TextField 
                    name="firstName"
                    label="first name" 
                    onChange={this.props.handleChange} 
                    defaultValue={firstName}
                    style={styles.bottomSpace} 
                    />
                    <br/>
                    <TextField 
                    name="lastName"
                    label="last name" 
                    onChange={this.props.handleChange} 
                    defaultValue={lastName} 
                    style={styles.bottomSpace} 
                    />
                    <br/>
                    <TextField 
                    name="userName"
                    label="username" 
                    onChange={this.props.handleChange} 
                    defaultValue={userName} 
                    style={styles.bottomSpace} 
                    />
                    <br/>
                    <TextField 
                    name="passWord"
                    label="password" 
                    onChange={this.props.handleChange} 
                    defaultValue={passWord}
                    style={styles.bottomSpace}  
                    />
                    <br/>
                    <TextField 
                    name="email"
                    label="email" 
                    onChange={this.props.handleChange} 
                    defaultValue={email} 
                    style={styles.bottomSpace} 
                    />
                    <br/>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    style={styles.button}
                    onClick={this.continue}
                    >
                     Continue
                    </Button>
                </>
           // </ThemeProvider>
        )
    }
}
const styles = {
    center: {
        margin: "auto",
        fontSize: 24,
        color: '#E0E0E0'
    },
    bottomSpace: {
       marginBottom: 20
    },
    button: {
        marginTop: 20
    }
}