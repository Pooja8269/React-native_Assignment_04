import React, { Component } from 'react';
import { View,ImageBackground,Image, Alert,Text, KeyboardAvoidingView,ScrollView} from 'react-native';
import firebase from 'firebase';
import { Input, Smallbtn } from '../common';
import ComponentStyle from './ComponentStyle' 
import Icon from 'react-native-vector-icons/FontAwesome';

// SignUp component
class SignUp extends Component {
      constructor(props){
        super(props)
          this.state = { email:"", password :"", error:"", cpassword:"" } // Initial state
      }
      // Input validation function
      validInput = (val1, val2, val3) => {
        if(!(/^\S+@\S+$/.test(val1))){
          alert("Please enter valid email");
          this.setState({email: ""});
        }else if (val2.trim().length < 6 && val3.trim().length < 6) {
          alert("Please enter minimum 6 character");
          this.setState({password: ""});
        }else if(val2 != val3){
          alert("Password does not match");
          this.setState({password: "", cpassword:""});
        }else return (val1, val2, val3);
      };

      onButtonPress()  {
        const { email, password } = this.state
       
        if (this.state.email == '' || this.state.password == '' || this.state.cpassword == '')
          alert("Please fill out all fields!");
        else if(this.state.email != '' && this.state.password != '' && this.state.cpassword!='' && this.validInput(this.state.email, this.state.password, this.state.cpassword))
        {
          firebase.auth().createUserWithEmailAndPassword(email, password) // Firebase createUserWithEmailAndPassword function
          .then(this.onSubmitSuccess.bind(this))
          .catch(()=>{
            this.setState({error:'User already exist..'}) // Error message
            setTimeout( () => { this.setState({error:'', email: "", password: "",cpassword:""}) ; // Error message disappear in 3 second
            }, 3000 );
          });
        }
      } 
      // After createUserWithEmailAndPassword success onSubmitSuccess called
      onSubmitSuccess(){
        alert("You have successfully registered")
        this.props.navigation.navigate('Login'); // Navigate to Login component
        this.setState({email: "", password: "", error:"", cpassword:""})
      }
    
  render() {
    return (
      <ImageBackground style={ComponentStyle.bgImageStyle} source={require('../../assets/Dark.jpg')}>
        <ScrollView style = {{flex:1}}>
          <KeyboardAvoidingView behavior='position' style = {{flex: 1}}>       
              <View style={ComponentStyle.appLogoBorderStyle}>
                <Image style={ComponentStyle.signUpLogoStyle} source={require('../../assets/signup.png')} />
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
                <Input secureTextEntry placeholder="Password" value={this.state.password}
                  onChangeText={(password) => this.setState({ password })}
                />
              </View>
              <View style={ComponentStyle.inputContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="lock" size={25} />
                <Input secureTextEntry placeholder="Confirm password" value={this.state.cpassword}
                  onChangeText={(cpassword) => this.setState({ cpassword })}
                />
              </View>
              <Text style={{fontSize:16, alignSelf:'center', color:'red'}}>{this.state.error}</Text>
              <View style={{ flexDirection: 'row'}}>
                <Smallbtn onPress={this.onButtonPress.bind(this)} > Save </Smallbtn>
                <Smallbtn onPress={() => { this.props.navigation.replace('Login')}}> Cancle </Smallbtn>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default SignUp;