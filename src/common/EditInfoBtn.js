import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import CommonStyle from './CommonStyle'
import Icon from 'react-native-vector-icons/FontAwesome';

// Reusable edit info button component 
const EditInfoBtn = ({ onPress,children }) => {
    return (
  <TouchableOpacity onPress={onPress}
  style={{
       borderWidth:1,
       borderColor:'#FFFFFF',
       alignItems:'center',
       alignSelf: 'center',
       justifyContent:'center',
       width:100,
       bottom: 5,                                                    
       right: 10,
       height:50,
       backgroundColor:'#fff',
       borderRadius:100,
       position: 'absolute',
     }}
 >
  <View style={{flexDirection:'row'}}>
  <Icon name="pencil-square-o"  size={25} color="#095260" />
  <Text style={{marginLeft:10, color:'#095260', fontSize:16, fontFamily:'serif'}}>Edit</Text>
  </View>
  </TouchableOpacity>
      
    );
};

export { EditInfoBtn };
