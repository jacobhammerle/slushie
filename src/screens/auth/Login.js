import React, { Component } from 'react'
import { firebase } from '../../firebase/config'
import styled from 'styled-components'
import { Button, View, Text, TextInput } from "react-native"

class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: null
  }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <LoginContainer>
        <LoginInput
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <LoginInput
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Signup!"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
      </LoginContainer>
    )
  }
}

const LoginContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`
const LoginInput = styled(TextInput)`
  border-color: gray
  border-width: 1px
  border-radius: 12px
  padding: 16px
  width: 85%
  margin-bottom: 16px
`

export default Login
