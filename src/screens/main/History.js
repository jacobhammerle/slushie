import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AllTransactions, AddTransaction } from '../../components'

const Stack = createStackNavigator()

class History extends Component {
  render() {
    return (
        <Stack.Navigator mode="modal">
          <Stack.Screen name="History" component={AllTransactions} />
          <Stack.Screen name="Add" component={AddTransaction} />
        </Stack.Navigator>
    )
  }
}

export default History
