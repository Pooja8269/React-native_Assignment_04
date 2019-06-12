import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import CommonStyle from './CommonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';

// Reusable floating button component 
const Floatingbtn = ({ onPress,children }) => {
    return (
  <TouchableOpacity onPress={onPress}
  style={{
       borderWidth:1,
       borderColor:'#FFFFFF',
       alignItems:'center',
       alignSelf: 'center',
       justifyContent:'center',
       width:50,
        bottom: 15,                                                    
       right: 10,
       height:50,
       backgroundColor:'#FFFFFF',
       borderRadius:100,
       position: 'absolute',
     }}
 >
  <Icon name="plus"  size={25} color="#095260" />
  </TouchableOpacity>
      
    );
};

export { Floatingbtn };
