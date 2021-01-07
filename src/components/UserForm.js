import React, { Component } from 'react';
import UserData from "./UserData";
import UserDetails from "./UserDetails";
import Confirm from "./Confirm";
import Success from "./Success";


export default class UserForm extends Component {
    state = {
        step: 1,
        firstName: "",
        lastName: "",
        userName: "",
        passWord: "",
        email: "",
        company: "",
        occupation: "",
        stack: ""
    }
    nextStep = () => {
     const { step } = this.state;
     this.setState({
        step: step + 1
     })
    }
    prevStep = () => {
        const { step } = this.state;
     this.setState({
        step: step - 1
     })
    }
    // handle input fields change
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { firstName, lastName, userName, passWord, email, company, occupation, stack } = this.state;
        const values = { firstName, lastName, userName, passWord, email, company, occupation, stack };

        switch (this.state.step){
                case 1:
                    return (
                        <UserData
                        values={values}
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        />
                    )
                case 2:
                    return (
                        <UserDetails
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        />
                    )
                case 3:
                    return (
                        <Confirm
                        values={values}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        />
                    );
                case 4:
                    return <Success/>
            }
        
        
    }
}
