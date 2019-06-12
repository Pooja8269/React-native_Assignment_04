import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommonStyle from './CommonStyle'

// Reusable small size button component 
const Smallbtn = ({ onPress,children }) => {
    return (
      <TouchableOpacity onPress={onPress} style={CommonStyle.signUpBtnStyle}>
         <Text style={CommonStyle.buttontextStyle}> {children} </Text>
      </TouchableOpacity>
    );
};

export { Smallbtn };