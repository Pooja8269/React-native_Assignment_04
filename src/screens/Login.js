import React, { Component } from 'react';
import { View,ImageBackground,Image, Alert,Text, TouchableOpacity,KeyboardAvoidingView, ScrollView} from 'react-native';
import firebase from 'firebase';
import { Input, Button} from '../common';
import ComponentStyle from './ComponentStyle' 
import Icon from 'react-native-vector-icons/FontAwesome';

// Login component
class Login extends Component {
    constructor(props){
      super(props)
      this.state = { email:"", password :"", error:""} // Initial state
    }
      // Input validation function
      validInput = ( val1, val2) => {
        if(!(/^\S+@\S+$/.test(val1))){
            alert("Please enter valid email");
            this.setState({email: ""});
        }else if (val2.trim().length < 6) {
            alert("Please enter minimum 6 character");
            this.setState({password: ""});
        }else return (val1, val2);
      };
      
      onButtonPress()  {
        const { email, password } = this.state

        if (this.state.email == '' || this.state.password == '')
            alert("Please fill out all fields!");
        else if(this.state.email != '' && this.state.password != '' && this.validInput(this.state.email, this.state.password))
        {
            firebase.auth().signInWithEmailAndPassword(email, password) // Firebase signInWithEmailAndPassword function
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
              this.setState({error:'Authentication failed ! Account does not exist..'}) ; // Error message
              setTimeout( () => { this.setState({error:'', email:"", password:""}) ; // Error message disappear in 3 second
              }, 3000 );
            })
        }
      } 
      // After signInWithEmailAndPassword success onLoginSuccess called
      onLoginSuccess(){
            this.props.navigation.navigate('TabRoutes'); // Navigate to TabRoutes component
            this.setState({email: "", password: "", error:""});
      }

  render() {
    return (
     <ImageBackground style={ComponentStyle.bgImageStyle} source={require('../../assets/Dark.jpg')}>
      <ScrollView style = {{flex:1}}>
        <KeyboardAvoidingView behavior='position' style = {{flex: 1}}>
          <View style={ComponentStyle.appLogoBorderStyle}>
            <Image style={ComponentStyle.appLogoStyle} source={require('../../assets/mylg.png')} />
          </View>
          <View style={ComponentStyle.container}>
            <View style={ComponentStyle.inputContainerStyle}>
              <Icon  style={ComponentStyle.iconStyle} name="user-circle-o" size={25}/>
              <Input placeholder= "Enter your email" value={this.state.email} keyboardType="email-address" 
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={ComponentStyle.inputContainerStyle}>
              <Icon  style={ComponentStyle.iconStyle} name="lock" size={25} />
              <Input secureTextEntry placeholder="Enter your password" value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
              />
            </View>
            <Text style={{fontSize:14, alignSelf:'center', color:'red', fontFamily:'serif', padding:5}}>{this.state.error}</Text>
            <Button  onPress={this.onButtonPress.bind(this)} > Login </Button>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SignUp')}}>
                <Text style={{fontSize:15 , alignSelf:'center', color:'#FFFFFF', marginTop:8, fontFamily:'serif'}}>Dont have account ? Create Account</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
     </ImageBackground>
    );
  }
}

export default Login;