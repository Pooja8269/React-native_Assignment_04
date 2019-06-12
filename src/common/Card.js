import React from 'react';
import { View } from 'react-native';
import CommonStyle from './CommonStyle'

// Reusable card component 
const Card = (props) => {
  return (
    <View style={CommonStyle.cardContainerStyle}>
        {props.children}
    </View>
  );
};

export { Card };