import React from 'react';
import { View } from 'react-native';
import CommonStyle from './CommonStyle'

// Reusable cardSection component 
const CardSection = (props) => {
  return(
      <View style={CommonStyle.cardSectionStyle}>
          {props.children}
      </View>
  );
};

export { CardSection };