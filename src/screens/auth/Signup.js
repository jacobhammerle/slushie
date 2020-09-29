import React, { Component } from 'react'
import { firebase } from '../../firebase/config'
import axios from 'axios'
import styled from 'styled-components'
import ENV from '../../config'
import { Button, View, Text, TextInput } from "react-native"

class Signup extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: null
  }

  handleSignup = () => {
    const { firstName, lastName, email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          const uid = response.user.uid
          const data = {
              id: uid,
              email,
              firstName,
              lastName
          }
          axios
            .post(
                `${ENV.BASE_URL}/createUser`,
                { user: data }
            )
            .then((response) => {
              // navigate to HomeStack and pass along newly created user data
              console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        })
        .catch((error) => {
            alert(error)
    })
  }

  render() {
    return (
      <SignupContainer>
        <SignupInput
          autoCapitalize="none"
          placeholder="First Name"
          onChangeText={firstName => this.setState({ firstName })}
          value={this.state.firstName}
        />
        <SignupInput
          autoCapitalize="none"
          placeholder="Last Name"
          onChangeText={lastName => this.setState({ lastName })}
          value={this.state.lastName}
        />
        <SignupInput
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <SignupInput
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <SignupInput
          autoCapitalize="none"
          placeholder="Confirm Password"
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          value={this.state.confirmPassword}
        />
        <Button title="Signup" onPress={this.handleSignup} />
        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </SignupContainer>
    )
  }
}

const SignupContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`
const SignupInput = styled(TextInput)`
  border-color: gray
  border-width: 1px
  border-radius: 12px
  padding: 16px
  width: 85%
  margin-bottom: 16px
`

export default Signup
