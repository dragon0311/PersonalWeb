import React from "react"
import { Route, Switch } from 'react-router-dom';
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import ComputerW from './ComputerW';
import PhoneW from './PhoneW';
import Home from "./Home";

export const MainRoute = () => {
  return(
    <Switch>
      <Route exact path="/home" component={Home}></Route>
      <Route exact path="/computerW" component={ComputerW}></Route>
      <Route exact path="/phoneW" component={PhoneW}></Route>
      <Route exact path="/signin" component={SignIn}/>
      <Route exact path="/signup" component={SignUp}/>
    </Switch>
  )
}
