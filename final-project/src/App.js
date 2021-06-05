import React, {useState} from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import PartyCard from "./components/Party/PartyCard"
import CreateForm from "./components/Party/PartyCreate.js"
import SignInSide from "./components/Login/SignIn"
import SignUp from "./components/Login/SignUp"
import PartyDetail from "./components/Party/PartyDetail"
import {LoginContext} from "./Contexts/LoginContext"
import PartyDetail2 from "./components/Party/PartyDetail2"

function App() {
  let titleHeader = "Join With Us" 
  let userinfo = JSON.parse(localStorage.getItem("user"))
  localStorage.getItem("user") && (titleHeader = userinfo.username)

  const [usernameDisplay, setUserNameDisplay] = useState(titleHeader);
  let checkLogin = false;
  localStorage.getItem("JWT") && (checkLogin = true)
  const [isLogin, setLogin] = useState(checkLogin);
  return (
    <LoginContext.Provider value={{usernameDisplay, setUserNameDisplay, isLogin, setLogin}}>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          {isLogin? <PartyCard />: <SignInSide />}
        
        </Route>
        <Route path="/login" exact>
        {/* <Login Page /> */}
          <SignInSide />
        </Route>
        <Route path="/covid" exact>
        {/* <Create Page /> */}
          <PartyDetail2 />
        </Route>
        <Route path="/create" exact>
        {/* <Create Page /> */}
          <CreateForm />
        </Route>
        <Route path="/signup" exact>
        {/* <Create Page /> */}
          <SignUp />
        </Route>
        <Route path="/partydetail/:id">
        {/* <Create Page /> */}
          <PartyDetail />
        </Route>
      </Switch>
    </Router>
    </LoginContext.Provider>
  )
}

export default App
