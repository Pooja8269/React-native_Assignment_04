import React, { Component } from 'react';
import {Text,View,TouchableOpacity,Alert,ImageBackground, Image} from 'react-native';
import { Button } from '../../common'
import ComponentStyle from '../ComponentStyle' ;
import {createStackNavigator, reateMaterialTopTabNavigator, NavigationActions} from 'react-navigation';

// Logout tab
export default class Logout extends Component {
  onLogout() {
    Alert.alert('Logout!!!', 'Are you sure you want to logout',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'),style: 'cancel'},
      {text: 'OK', onPress: () => this.props.navigation.replace('Login')}, // Navigate to Login screen 
    ],
      {cancelable: false},
    );
  }
  
  render() {
    return (
      <ImageBackground style={ComponentStyle.bgImageStyle} source={require('../../../assets/Dark.jpg')}>
        <View style={ComponentStyle.logoutgifStyle}>
          <Image style={ComponentStyle.logoutinnerStyle} source={require('../../../assets/logout.gif')} />
        </View>
        <Button onPress={this.onLogout.bind(this)}> Logout </Button>
      </ImageBackground>
    );
  }
}