import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Logo from "./Logo"
import "./styles/Register.css"

const Wrapper = styled.div`
    @media only screen and (max-width : 399px) {
        width: 10%
    }
`

const BtnFacebook = styled.button`
    width: 165px;
    height:35px;  
    border-radius: 4px;
    background: #3b5998;
    color:white;
    border:0px transparent;  
    text-align: center;
    margin:5px;
    display: inline-block;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`;
const BtnGoogle = styled.button`
    margin:5px;
    width: 165px;
    height:35px;
    border-radius: 4px;
    background: #db3236;
    color:white;
    border:0px transparent;
    text-align: center;

    &:hover{
        background: #3b5998;
        opacity: 0.6;
    }
`
export default class Register extends Component {
    render() {
        return (
            <form>
                <style></style>
                <div className="center">
                    <div className="logoContainer" style={{marginLeft: 0}}>
                        <Logo name="Helpie" />
                    </div>
                </div>
                <div className="col-md-3 center field">
                    <label>
                        <p>Email address</p>
                        <input type="email" />
                    </label>
                </div>
                <div className="col-md-3 center field">
                    <label>

                        <p>Username</p>
                        <input type="text" />
                    </label>
                </div>
                <div className="col-md-3 center field">
                    <label>
                        <p>Address</p>
                        <input type="address" />
                    </label>
                </div>
                <div className="col-md-3 center field">
                    <label>
                        <p>Password</p>
                        <input type="password" />
                    </label>
                </div>
                <div className="col-md-3 center field">
                    <label>
                        <p>Repeat password</p>
                        <input type="password" />
                    </label>
                </div>

                <div className="col-md-3 center">
                    <Button variant="contained" color="primary" disableElevation>
                        Register
                    </Button>
                </div>
                <div className="col-md-3 center">
                    <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                        <Wrapper>
                            <BtnFacebook>
                                &nbsp;&nbsp;Register with Facebook
                        </BtnFacebook>
                            <BtnGoogle>
                                &nbsp;&nbsp;Register with Google
                        </BtnGoogle>
                        </Wrapper>
                    </div></div>
            </form>
        );
    }
}