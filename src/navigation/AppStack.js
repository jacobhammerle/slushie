import React, { Component } from 'react'
import { View } from "react-native"
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

class AppStack extends Component {
  render() {
    const { user } = this.props
    if(user) { return ( <HomeStack /> ) }
    return ( <AuthStack /> )
  }
}

export default AppStack
