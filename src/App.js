import React from "react"
import Header from "./Header"
import Login from "./Login"
import Overview from "./Overview"
import HomePage from "./HomePage"
import Footer from "./Footer"
import Register from "./Register"
//import Profile from "./Profile"
import ContactPage from "./ContactPage"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                {/* <Route exact path="/profile" component={Profile} /> */}
                <Route exact path="/overview" component={Overview} />
                <Route exact path="/ContactPage" component={ContactPage} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;