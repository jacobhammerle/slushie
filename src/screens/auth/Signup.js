import React from "react"
import styled from 'styled-components'
import { Button, View, Text } from "react-native"

const Signup = ({ navigation }) => {
  return (
    <SignupContainer>
      <Text>Signup</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </SignupContainer>
  )
}

const SignupContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`

export default Signup
