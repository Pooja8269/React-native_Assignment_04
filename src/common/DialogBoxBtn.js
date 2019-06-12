import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommonStyle from './CommonStyle'

// Reusable dialog box button component 
const DialogBoxBtn = ({ onPress,children }) => {
    return (
      <TouchableOpacity onPress={onPress} style={CommonStyle.popUpBtnStyle}>
         <Text style={CommonStyle.popUpbuttontextStyle}> {children} </Text>
      </TouchableOpacity>
    );
};

export { DialogBoxBtn };