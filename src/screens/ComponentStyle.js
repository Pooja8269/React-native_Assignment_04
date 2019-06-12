import {Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

// Screens folder all component style  
const ComponentStyle = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:30
  },
  inputContainerStyle:{
      alignSelf: 'center',
      height:40,
      width:width-20,
      flexDirection:'row',
      borderColor:'#FFFFFF',
      borderRadius: 50,
      borderWidth: 1,
      marginBottom:40
  },
  inputInfoStyle:{
      alignSelf: 'center',
      height:40,
      width:width-20,
      flexDirection:'row',
      borderColor:'#FFFFFF',
      borderRadius: 50,
      borderWidth: 1,
      marginBottom:20
  },
  infoContainerStyle:{
      alignSelf: 'center',
      height:40,
      width:width-20,
      flexDirection:'row',
      borderColor:'#FFFFFF',
      borderRadius: 50,
      borderWidth: 1,
      marginBottom:20
  },
  iconStyle:{
      marginLeft:10,
      marginTop:6,
      color:'#FFFFFF'
  },
  bgImageStyle: {
      flex: 1,
      height: height - 0,
      width: width - 0,
  },
  appLogoBorderStyle: {
      height: 120,
      width:120,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop:100,
      borderRadius:120/2,
      borderColor:'#FFFFFF',
      borderWidth: 1.5,
  },
  postLogoBorderStyle:{
      height: 120,
      width:120,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop:50,
      marginBottom:10,
      borderRadius:120/2,
      borderColor:'#FFFFFF',
      borderWidth: 1.5,
  },
  postLogoStyle:{
      height: 100,
      width:100,
      borderRadius:100/2,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding:10
  },
  appLogoStyle: {
      height: 100,
      width:100,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding:10
  },
  signUpLogoStyle: {
      height: 90,
      width:90,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding:10
  },
  postImageBorderStyle:{
      height: 160,
      width:160,
      alignItems:'center',
      justifyContent: 'center',
      marginTop:10,
      marginBottom:10,
      marginLeft:20,
      borderRadius:160/2,
      borderColor:'#FFFFFF',
      borderWidth: 1.5,
  },
 myProfileImageStyle: {
      height: 195,
      width:195,
      alignItems:'center',
      justifyContent: 'center',
      marginTop:15,
      alignSelf: 'center',
      borderRadius:195/2,
      borderWidth: 2,
      borderColor:'#FFFFFF',
  },
  logoutgifStyle:{
      height: 195,
      width:195,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop: 50,
      marginBottom:50,
      borderWidth: 2,
      borderColor:'#FFFFFF',
  },
  myProfileinnerStyle:{ 
      height: 180,
      width:180,
      borderRadius:180/2,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding:20,
  },
  logoutinnerStyle:{
      height: 170,
      width:170,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding:20,
  },
  imageContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
  },
  inputInfoContainerStyle:{
      flexDirection: 'column',
      justifyContent: "center",
      marginTop: 30,
  },
  editStyle:{
      height: 160,
      width:160,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      marginTop:10,
      borderRadius:160/2,
      borderColor:'#FFFFFF',
      borderWidth: 1,
    },
  editinnerStyle:{
      height: 150,
      width:150,
      borderRadius:150/2,
      alignItems:'center',
      justifyContent: 'center',
      alignSelf: 'center',
      padding:8
  },
  contactLabelStyle : {
      fontSize: 16,
      color: '#FFFFFF',
      fontFamily: 'serif',
      marginLeft:8,
      marginTop:6,
      width: 300
  },
  selectImageStyle:{
      marginTop:150,
      color:'#FFFFFF'
  },
  dialogBoxTitleStyle: {
      fontFamily: 'serif',
      width:width-20,
      height:50,
      color: '#095260',
      marginLeft:10,
      marginBottom:10,
      paddingLeft:10,
      fontSize:20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#095260',
  },
  dialogBoxDiscriptionStyle: {
      fontFamily: 'serif',
      width:width-20,
      height:150,
      fontSize:18,
      padding:10,
      marginLeft:10,
      color: '#095260',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#095260',
  },
});

export default ComponentStyle;
