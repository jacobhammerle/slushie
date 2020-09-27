import React, { Component } from 'react'
import styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Env from '../config'
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

class History extends Component {
  constructor(props) {
    super(props)

    this.state = {
      transactions: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch(`${Env.BASE_URL}/getUserTransactions`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ transactions: json.transactions })
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false })
      })
  }

  render() {
    const { transactions, isLoading } = this.state

    return (
        <HomeContainer>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList
              data={transactions}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
                <Text>{item.category}: ${item.price}</Text>
              )}
            />
          )}
          <AddButton>
            <Icon name='ios-add' />
          </AddButton>
        </HomeContainer>
    )
  }
}

const HomeContainer = styled(View)`
  flex: 1
  justify-content: center
  align-items: center
`
const AddButton = styled(View)`
  position: absolute
  bottom: 0
  right: 0
  margin-right: 15px
  margin-bottom: 15px
  border-radius: 100px
  width: 60px
  height: 60px
  background-color: #0000FF
`
const Icon = styled(Ionicons)`
  font-size: 40px
  color: #FFFFFF
  margin-left: 20px
  margin-top: 9px
`

export default History
