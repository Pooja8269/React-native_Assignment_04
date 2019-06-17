import React, { Component } from 'react';
import { View,ImageBackground } from 'react-native';
import ComponentStyle from './ComponentStyle'

// Splash screen component
class Splash extends Component{
  componentDidMount(){
      setTimeout( () => {
      this.props.navigation.navigate('Login') // Navigate to login screen after 3 second
      }, 3000 );
    }

  render(){
    return(
      <View style={{backgroundColor:'#fff'}}>
        <ImageBackground style={ComponentStyle.bgImageStyle} source={require('../../assets/Launch.jpg')}/>
      </View>
    )
  }
}

export default Splash;






