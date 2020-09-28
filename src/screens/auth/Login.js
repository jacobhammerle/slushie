import React from "react"
import styled from 'styled-components'
import { Button, View, Text } from "react-native"

const Login = ({ navigation }) => {
  return (
    <LoginContainer>
      <Text>Login</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Don't have an account? Signup!"
        onPress={() => navigation.navigate('Signup')}
      />
    </LoginContainer>
  )
}

const LoginContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`

export default Login
