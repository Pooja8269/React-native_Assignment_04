import React, { Component } from 'react';
import {createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator, createBottomTabNavigator} from 'react-navigation';
import {View,Text,Image,ImageBackground} from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import MyProfiles from './Tabs/myProfiles';
import MyPost from './Tabs/myPost';
import Logout from './Tabs/logout';

// All tabs navigator 
const Navigator = createMaterialTopTabNavigator({
    My_Profile: MyProfiles,
    Post: MyPost,
    Logout: Logout
  },

  {
    tabBarOptions: {
        swipeEnabled: false,
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#d6dadb',
    style: {
        backgroundColor: '#095260',
        paddingTop:20,
        fontSize:18,
        fontFamily: 'serif',
        fontWeight: '600',
        marginBottom:3
    },
        indicatorStyle: {
          backgroundColor: '#FFFFFF',
        },
    }
  }
)

export default Navigator;