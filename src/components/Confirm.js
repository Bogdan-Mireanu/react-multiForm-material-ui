import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { List, ListItem, ListItemText} from '@material-ui/core';
import { Button } from '@material-ui/core';

export default class Confirm extends Component {
    continue = () => {
        //send data
        this.props.nextStep();
    }
    back = () => {
        this.props.prevStep();
    }

    render() {
        const { firstName, lastName, userName, passWord, email, company, occupation, stack } = this.props.values;
        return (
            <>  <AppBar position="static">
                    <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography style={styles.center}>Confirm All User Data </Typography> 
                    </Toolbar>
                </AppBar>
                <br/>
                <List >
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="first name" primary={firstName} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="last name" primary={lastName} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="username" primary={userName} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="password" primary={passWord} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="email" primary={email} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="company" primary={company} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="occupation" primary={occupation} ></ListItemText>
                    </ListItem>
                    <ListItem style={styles.centerText}>
                        <ListItemText secondary="stack" primary={stack} ></ListItemText>
                    </ListItem>
                </List>
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
                     confirm & submit
                </Button>
            </>
        )
    }
}

const styles = {
    center: {
        margin: "auto",
        fontSize: 24,
    },
    
    button: {
        marginTop: 20,
        marginRight: 10,
        width: "40%"
    },
    centerText: {
        textAlign: "center"
    }
}