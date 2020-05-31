import React from "react"
import { Route, Switch } from 'react-router-dom';
import SignUp from "./SignUp"
import Register from "./Register"
import ComputerW from './ComputerW';
import PhoneW from './PhoneW';

export const MainRoute = () => {
  return(
    <Switch>
      <Route exact path="/computerW" component={ComputerW}></Route>
      <Route exact path="/phoneW" component={PhoneW}></Route>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  )
}
