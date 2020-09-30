import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text } from "react-native"

class AddTransaction extends Component {
  render() {
    return (
      <SettingsContainer>
        <Text>Add Transaction</Text>
      </SettingsContainer>
    )
  }
}

const SettingsContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`

export default AddTransaction
