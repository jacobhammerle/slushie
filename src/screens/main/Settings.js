import React, { Component } from 'react'
import { firebase } from '../../firebase/config'
import styled from 'styled-components'
import { View, Text, Button } from "react-native"

class Settings extends Component {

  signOutUser = async () => {
      try {
          await firebase.auth().signOut();
      } catch (e) {
          console.log(e);
      }
  }

  render() {
    return (
      <SettingsContainer>
        <Text>Settings</Text>
        <Button title="Logout" onPress={this.signOutUser} />
      </SettingsContainer>
    )
  }
}

const SettingsContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`

export default Settings
