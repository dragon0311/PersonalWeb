import React, { Component } from 'react'
import RegisterForm from './RegisterForm'

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>欢迎加入我们！</h1>
        <RegisterForm/>
      </div>
    )
  }
}
