import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommonStyle from './CommonStyle'

// Reusable button component 
const Button = ({ onPress,children }) => {
    return (
      <TouchableOpacity onPress={onPress} style={CommonStyle.buttonStyle}>
         <Text style={CommonStyle.buttontextStyle}>  {children} </Text>
      </TouchableOpacity>
    );
};

export { Button };