import React from "react"
import styled from 'styled-components'
import { View, Text } from "react-native"

const Settings = () => {
  return (
    <SettingsContainer>
      <Text>Settings</Text>
    </SettingsContainer>
  )
}

const SettingsContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`

export default Settings
