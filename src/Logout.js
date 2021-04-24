import React, { useState }  from "react";
import { Redirect } from "react-router";

const Logout = (props) => {
    localStorage.clear();
    window.location.reload(false);
    return <Redirect to="/" />
}

export default Logout;