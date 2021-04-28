import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Overview.css"

const Overview = () => {
    return (
        <div id="paginaOverview">
            <div id="titlu">
                <div class="raze">
                    <span class="lumina">Together we are better!</span>
                    <span class="gradient"></span>
                    <span class="spotlight"></span>
                </div>
            </div>

            <div id="articole">

                <div id="glow">
                    <Link to="/ContactPage">Who are we?</Link>
                </div>
                <div id="electric">
                    <Link to="/motivation">Why are we doing this?</Link>
                </div>

                <div id="power">
                    <Link to="/motivation">Why you should join us?</Link>
                </div>

            </div>

            <div id="jumping">
                <span>H</span>
                <span>e</span>
                <span>l</span>
                <span>p</span>
                <span>i </span>
                <span>e</span>
            </div>

        </div >
    )
}

export default Overview;