import React from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import styled from "styled-components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PartyCard from "./components/Party/PartyCard"
import PartyContainer from "./components/Party/PartyContainer"
import CreateParty from "./components/pages/CreateParty"


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
        <Route path="/create" exact>
          <CreateParty />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
