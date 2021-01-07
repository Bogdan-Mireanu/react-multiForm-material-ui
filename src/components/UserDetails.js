import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default class UserDetails extends Component {
    continue = () => {
        this.props.nextStep();
    }
    back = () => {
        this.props.prevStep();
    }

    render() {
        const { company, occupation, stack } = this.props.values;
        return (
            <>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
                        <Typography style={styles.center}>Enter User Professional Data </Typography> 
                    </Toolbar>
                </AppBar>
                <br/>
                <TextField 
                    name="company"
                    label="company" 
                    onChange={this.props.handleChange} 
                    defaultValue={company}
                    style={styles.bottomSpace} 
                />
                    <br/>
                <TextField 
                    name="occupation"
                    label="occupation" 
                    onChange={this.props.handleChange} 
                    defaultValue={occupation} 
                    style={styles.bottomSpace} 
                />
                    <br/>
                <TextField 
                    name="stack"
                    label="stack" 
                    onChange={this.props.handleChange} 
                    defaultValue={stack} 
                    style={styles.bottomSpace} 
                />
                    <br/>
                <Button 
                    variant="contained" 
                    style={styles.button}
                    onClick={this.back}
                >
                     back
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    style={styles.button}
                    onClick={this.continue}
                >
                     continue
                </Button>
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
    bottomSpace: {
       marginBottom: 20
    },
    button: {
        marginTop: 20,
        marginRight: 10,
        width: "20%"
    }
}