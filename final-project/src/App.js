import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PartyCard from "./components/Party/PartyCard"
import PartyContainer from "./components/Party/PartyContainer"
import CreateParty from "./components/pages/CreateParty"
import LoginForm from "./Login.js"
import CreateForm from "./CreatePage.js"
import SignInSide from "./components/Login/SignIn"

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <div className="homepage__content-component px-3 px-md-0 ml-md-4">
            <PartyCard />
          </div>
          <div className="homepage__content-component px-3 px-md-0 ml-md-4">
            <PartyContainer />
          </div>
        </Route>
        <Route path="/login" exact>
        {/* <Login Page /> */}
          <SignInSide />
        </Route>
        <Route path="/create" exact>
        {/* <Create Page /> */}
          <CreateForm />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
