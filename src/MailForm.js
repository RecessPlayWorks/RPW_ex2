import React, { useState,Component } from "react";
import styled from "styled-components";

import axios from 'axios';
import { async } from "q";

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


    const MailForm =  () => {
        const [email, setEmail] = useState("defaultEmail")
        const [name, setName] = useState("defaultname")
        const [message, setMessage] = useState("defaultmessage")
        
        const submitHandler=  (e) => {
            e.preventDefault();
            console.log(`
            {name: ${name},
            email: ${email},
            msg: ${message}}`) 
            
            // const form = await axios.post('/api/form', {
            //     name,
            //     email,
            //     message
            // })
    }

       
        return (
            <StyledMailForm onSubmit={submitHandler} >
                <fieldset>
                <legend>Mail Form</legend>
                <label htmlFor="name">name</label>
                <input
                onChange={e=>setName(e.target.value)}
                className="name"
                type="text"
                placeholder="name"
                value={name}
                />
                <label htmlFor="email">email</label>
                <input
                onChange={e=>setEmail(e.target.value)}
                className="email"
                type="email"
                placeholder="email"
                value={email}
                />
                <label htmlFor="message">message</label>
                <input
                onChange={e=>setMessage(e.target.value)}
                className="message"
                type="textarea"
                placeholder="message"
                value={message}
                />
                </fieldset>
                <button type="submit">Send Email</button>
            </StyledMailForm>
        )
    }


export default MailForm;
