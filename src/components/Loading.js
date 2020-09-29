import React, { Component } from 'react'
import styled from 'styled-components'
import { View, Text, ActivityIndicator } from 'react-native'

class Loading extends Component {
  render() {
    return (
      <LoadingContainer>
        <ActivityIndicator size="large" />
      </LoadingContainer>
    )
  }
}

const LoadingContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`

export default Loading
