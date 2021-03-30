import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import Logo from "./Logo"
import "./styles/Login.css"

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
export default class Login extends Component {
    render() {
        return (
            <form>
                <style></style>
                <div className="center">
                    <div className="logoContainer">
                        <Logo name="Helpie" />
                    </div>
                </div>
                <div className="col-md-3 center field">
                    <label>
                        <p>Username or email</p>
                        <input type="text" />

                    </label>
                </div>
                <div className="col-md-3 center">
                    <label>

                        <p>Password</p>
                        <input type="password" />
                    </label>
                </div>

                <div className="col-md-3 center">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <div className="col-md-3 center">
                    <Button variant="contained" color="primary" disableElevation>
                        Login
                    </Button>
                </div>
                <div className="col-md-3 center">
                    <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                        <Wrapper>
                            <BtnFacebook>
                                &nbsp;&nbsp;Sign In with Facebook
                        </BtnFacebook>
                            <BtnGoogle>
                                &nbsp;&nbsp;Sign In with Google
                        </BtnGoogle>
                        </Wrapper>
                    </div></div>

                <p className="col-md-3 center forgot-password text-right ">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}