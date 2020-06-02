import React, { Component } from 'react'
import SignUpForm from './SignUpForm'

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1>欢迎加入我们！</h1>
        <SignUpForm/>
      </div>
    )
  }
}
