import React, { Component } from "react";
import styled from "styled-components";
/* AS A FUNCTIONAL COMPONENT*/

const StyledMailForm = styled.form`
    background: grey;
    width: 100%;
    height: 100%;
    display: grid;
        fieldset {
            margin: auto;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 1fr);
            width: 80%;
        }
        & input {
            width: 100%;
            height: 5vh;
            &.name {
                border:3px solid lightblue;
                font-size: 2rem;
            }
            &.message {
                border:3px solid lightgreen;
                height: 15vh;
                font-size: 2rem;
            }
        }
    & button {
        width: 6vw;
        height: 3vh;
        margin: auto;
        background: #269e6c;
        color: #fff;
    }
`;


    // const MailForm =  () => {
class MailForm extends Component{        
constructor(props) {
    super(props);
    this.state = {
        email: "default@email.io",
        name: "defaultName",
        message: "defaultMessage"
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
}

    changeHandler(e) {
    this.setState({[e.target.name]: e.target.value})
    }
    submitHandler(e) {
        const {email, name, message} = this.state;

        e.preventDefault();
            console.log(`
            {name: ${name},
            email: ${email},
            msg: ${message}}`) 
            console.log("state:",this.state)
    }

       render() {
           const {email, name, message} = this.state;
           return (
               <StyledMailForm onSubmit={this.submitHandler} >
            <fieldset>
                <legend>Mail Form</legend>
                <label htmlFor="name">name</label>
                <input
                onChange={this.changeHandler}
                name="name"
                type="text"
                placeholder="name"
                value={name}
                />
                <label htmlFor="email">email</label>
                <input
                onChange={this.changeHandler}
                className="email"
                name="email"
                type="email"
                placeholder="email"
                value={email}
                />
                <label htmlFor="message">message</label>
                <input
                onChange={this.changeHandler}
                className="message"
                name="message"
                type="textarea"
                placeholder="message"
                value={message}
                />
                </fieldset>
                <button type="submit">Send Email</button>

                <div> State: {this.state.name}</div>
            </StyledMailForm>
        )
    }
}


export default MailForm;
