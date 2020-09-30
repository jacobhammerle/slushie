import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { History, Settings } from '../screens'

const Tab = createBottomTabNavigator()

class HomeStack extends Component {
  render(){
    return (
      <Tab.Navigator mode="modal"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'History') {
              iconName = 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = 'ios-settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="History" component={History} />
        <Tab.Screen name="Settings" component={Settings} options={{ tabBarBadge: 3 }} />
      </Tab.Navigator>
    )
  }
}

export default HomeStack
