import React from "react";
import styles from "./styles/Motivation.css"

const Motivation = () => {
    return (
        <div id="body">
                <h1 id="title">Motivations</h1>
                <article id="main">
                    <section id="first">
                        <h2>Why did we make this project?</h2>
                            <p>We started building this project as a university project for the Software Engineering course.</p>
                    </section>
                    <section id="second">
                        <h2>What is the purpose of the application?</h2>
                            <p>The main idea behind the project is to create a platform where people could help each other through various means, limited only by the kindness of the people who want to help. <br/>
                            Its goal is to build a community of kind people who wish to make a better world by helping those in need, and getting help as well when they need it.  
                            </p>
                    </section>
                    <section id="third">
                        <h2>Who is this project's main audience?</h2>
                            <p>This project is addressed to people of all ages, but especially for the elders and people in need, who can benefit from help from others.
                            </p>
                    </section>
                    <section id="fourth">
                        <h2>What is the future of this project?</h2>
                            <p>There is no current prediction over how this project will look like in the future, as it may only remain in the university project stage.
                            </p>
                    </section>

                </article>
        </div >
    )
}

export default Motivation;