/* eslint-disable react/display-name */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import TeachersList from '@/screens/TeachersList'
import Favorites from '@/screens/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flexGrow: 0,
          height: 20,
          width: 20,
        },
        labelStyle: {
          marginLeft: 24,
          fontFamily: 'Archivo700',
          fontSize: 13,
        },
        inactiveBackgroundColor: '#fafafc',
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1bccc',
        activeTintColor: '#32264d',
      }}
    >
      <Screen
        name="TeachersList"
        component={TeachersList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ size, color, focused }) => (
            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
          ),
        }}
      />
    </Navigator>
  )
}

export default StudyTabs
