import {Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

const CommonStyle = StyleSheet.create({
  buttontextStyle: {
      alignSelf: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 8,
      paddingBottom: 10,
      fontFamily: 'serif'
  },
  buttonStyle: {
      height:40,
      width:width-20,
      backgroundColor: 'transparent',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      marginTop:5
  },
   popUpbuttontextStyle: {
      alignSelf: 'center',
      color: '#095260',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 8,
      paddingBottom: 10,
      fontFamily: 'serif'
  },
  popUpBtnStyle:{
      height:40,
      width:160,
      backgroundColor: 'transparent',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#095260',
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      marginTop:10
  },
  signUpBtnStyle:{
       height:40,
      width:160,
      backgroundColor: 'transparent',
      borderRadius: 50,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      marginLeft: 10,
      marginRight: 10,
      marginBottom:10,
      marginTop:5
  },
inputStyle: {
      width : width-20,
      fontSize: 16,
      color: '#FFFFFF',
      marginLeft:8,
      marginTop:6,
  },
  cardContainerStyle: {
     flexDirection: 'row',
      borderWidth: 1,
      borderColor: '#ddd',
  },
  cardSectionStyle: {
      flexDirection: 'column',
      justifyContent: 'center',
      padding:10,
      marginBottom:10
  },
});

export default CommonStyle;