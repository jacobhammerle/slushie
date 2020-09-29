import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'

class Routes extends Component {
  render() {
    const user = false
    return (
      <NavigationContainer>
        {user ? <HomeStack /> : <AuthStack />}
      </NavigationContainer>
    )
  }
}

export default Routes
