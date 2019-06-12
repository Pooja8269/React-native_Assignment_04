import React from 'react';
import { View, TextInput } from 'react-native';
import CommonStyle from './CommonStyle'

// Reusable input component 
const Input = ({ value, onChangeText, placeholder,secureTextEntry,keyboardType,returnKeyType,multiline}) => {
  return (
  <View >
        <TextInput 
          style={CommonStyle.inputStyle}
          placeholder={placeholder}
          placeholderTextColor='#cecece'
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText} 
          keyboardType={keyboardType}
          returnKeyType={returnKeyType}
          multiline={multiline}
         />
      </View>
   
  )
}

export { Input };