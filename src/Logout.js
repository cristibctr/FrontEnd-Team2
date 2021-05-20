import React, { useState }  from "react";
import { Redirect } from "react-router";

const Logout = (props) => {
    localStorage.clear();
    window.location.reload();
    return <Redirect to="/" />
}

export default Logout;