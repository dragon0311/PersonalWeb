import React from "react"
import { Route, Switch } from 'react-router-dom';
import SignUp from "./SignUp"
import Register from "./Register"
import Video from './Video';
import Homework from './Homework';

export const MainRoute = () => {
  return(
    <Switch>
      <Route exact path="/video" component={Video}></Route>
      <Route exact path="/homework" component={Homework}></Route>
      <Route exact path="/signup" component={SignUp}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
  )
}
