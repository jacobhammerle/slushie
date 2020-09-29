import React, { Component } from 'react'
import { firebase } from '../firebase/config'
import { NavigationContainer } from '@react-navigation/native'
import { Loading } from '../screens'
import AppStack from './AppStack'
import { View } from 'react-native';

class Routes extends Component {
  state = { user: false }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: user })
    })
  }

  render() {
    return (
      <NavigationContainer>
        <AppStack user={this.state.user} />
      </NavigationContainer>
    )
  }
}

export default Routes
