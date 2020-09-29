import React, { Component } from 'react'
import { firebase } from '../../firebase/config'
import styled from 'styled-components'
import { Button, View, Text, TextInput } from "react-native"

class Signup extends Component {
  state = { fullName: '', email: '', password: '', confirmPassword: '', errorMessage: null }

  handleSignup = () => {
    const { fullName, email, password, confirmPassword } = this.state
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
              fullName,
          }
          const usersRef = firebase.firestore().collection('users')
          usersRef
            .doc(uid)
            .set(data)
            .then(() => {
              // navigate to HomeStack
              // this.props.navigation.navigate('Home')
              console.log('user created successfully')
            })
            .catch((error) => {
              alert(error)
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
          placeholder="Full Name"
          onChangeText={fullName => this.setState({ fullName })}
          value={this.state.fullName}
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
