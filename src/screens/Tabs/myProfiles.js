import React, {Component} from 'react';
import { View, Text, ImageBackground ,Image,ScrollView, TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import ComponentStyle from '../ComponentStyle';
import {Input,EditInfoBtn,Smallbtn } from '../../common';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ImagePicker, Permissions, Constants} from 'expo';
import firebase from 'firebase';

// My Profiles tab
export default class myProfiles extends Component {
    constructor(props){
        super(props)
          this.state = {  dbData:{},name:'', age:'',gender:'',email:'',contact:'',Screen_Status: true,
            image: 'https://pbs.twimg.com/profile_images/3562696696/6ec3897752ea1d5be41be0cd00acc4a5_400x400.jpeg',
          }
    }

    componentWillMount(){
      // Created profile table in firebase
      firebase.database().ref('profile').set(
        {
          id:1,
          name: "Pooja Sharma",
          age : 24,
          gender: "Female",
          email  :"pooja@xyz.com",
          contact: 9087656754,
          image: 'https://pbs.twimg.com/profile_images/3562696696/6ec3897752ea1d5be41be0cd00acc4a5_400x400.jpeg',
        }
      ).then(()=>{console.log('Inserted')})
      .catch((Error) => {console.log(Error)});

      // fetched profile table data from firebase
      firebase.database().ref('profile').on('value', (data)=>{
         this.setState({dbData : data.toJSON()});
      })
    }

   // Input validation function
    validInput = ( name, age, gender, email, contact ) => {
      if(!(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(name))){
          alert("Name : Please enter character only");
      }else if(!(/^([1-9]|[1-9][0-9])$/.test(age))){
          alert("Age : Please enter valid age")
      }else if(!(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(gender))){
          alert("Gender : Please enter character only");
      }else if(!(/^.+?@.+?\..+$/.test(email))){
          alert("Email : Please enter valid email address");
      }else if(!(/^(?:\([2-9]\d{2}\)\ ?|[2-9]\d{2}(?:\-?|\ ?))[2-9]\d{2}[- ]?\d{4}$/.test(contact))){
          alert("Contact : Please enter valid contact number")
      }else return (name, age, gender, email, contact);
      };
    
    // Update profile information function 
    onSubmit = () => {
      if(this.state.Screen_Status == true){
        this.setState({Screen_Status : false})
      }else if(this.state.Screen_Status == false && this.state.name == '' && this.state.age == '' && this.state.gender == '' && this.state.email == '' && this.state.contact == ''){
          alert("Please fill out all fields!");
      }else if(this.state.Screen_Status == false && this.validInput(this.state.name, this.state.age, this.state.gender, this.state.email, this.state.contact) ){
        firebase.database().ref('profile').update(
          {
            name: this.state.name,
            age : this.state.age,
            gender : this.state.gender,
            email : this.state.email,
            contact : this.state.contact,
            image: this.state.image
          }
        ).then(()=>{console.log('Updated')})
        .catch((Error) => {console.log(Error)});
          this.setState({Screen_Status : true})
      }
    }

    // Image Picker code start
    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') 
          alert('Sorry, we need camera roll permissions to make this work!');
        }
    }

    pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
      });

        if (!result.cancelled) 
          this.setState({ image: result.uri });
    };
    // Image Picker code ends

  render() {
    return (
      <ImageBackground style={ComponentStyle.bgImageStyle} source={require('../../../assets/Dark.jpg')}>
      {
        this.state.Screen_Status == true &&
          <ScrollView>
            <View style={ComponentStyle.myProfileImageStyle}>
              <Image style={ComponentStyle.myProfileinnerStyle} source={{ uri: this.state.dbData.image }} />
            </View>
            <View style={ComponentStyle.inputInfoContainerStyle}>
              <View style={ComponentStyle.infoContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="user-circle-o" size={25} />
                <Text style={ComponentStyle.contactLabelStyle}>User Name: {this.state.dbData.name}</Text>
              </View>
              <View style={ComponentStyle.infoContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="user-circle-o" size={25} />
                <Text style={ComponentStyle.contactLabelStyle}>Age: {this.state.dbData.age}</Text>
              </View>
              <View style={ComponentStyle.infoContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="transgender-alt" size={25} />
                <Text style={ComponentStyle.contactLabelStyle}>Gender: {this.state.dbData.gender} </Text>
              </View>
              <View style={ComponentStyle.infoContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="envelope" size={25} />
                <Text style={ComponentStyle.contactLabelStyle}>Email: {this.state.dbData.email} </Text>
              </View>
              <View style={ComponentStyle.infoContainerStyle}>
                <Icon  style={ComponentStyle.iconStyle} name="phone" size={25} />
                <Text style={ComponentStyle.contactLabelStyle}>Contact: {this.state.dbData.contact} </Text>
              </View>
              <View style={{marginTop:50}}>
                <EditInfoBtn onPress={this.onSubmit.bind(this)}/> 
              </View>
            </View>   
          </ScrollView>
      }
      {
        this.state.Screen_Status == false &&
          <ScrollView style = {{flex:1}}>
            <KeyboardAvoidingView behavior='position' style = {{flex: 1}}>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent: 'center',alignSelf: 'center', }}>
                <View style={ComponentStyle.editStyle}>
                  { this.state.image &&
                    <Image style={ComponentStyle.editinnerStyle} source={{ uri: this.state.image }}  />
                  }
                </View>
                <TouchableOpacity 
                    onPress={this.pickImage}>
                    <Icon  style={ComponentStyle.selectImageStyle}  name="edit" size={30} />
                </TouchableOpacity>
              </View>
              <View style={ComponentStyle.inputInfoContainerStyle}>
                <View style={ComponentStyle.inputInfoStyle}>
                  <Icon  style={ComponentStyle.iconStyle} name="user-circle-o" size={25}/>
                  <Input placeholder="Enter your name" value={this.state.name}
                    onChangeText={(name)=> this.setState({name})}/>
                </View>
                <View style={ComponentStyle.inputInfoStyle}>
                  <Icon  style={ComponentStyle.iconStyle} name="user-circle-o" size={25} />
                  <Input placeholder="Enter your Age" keyboardType="numeric"  value={this.state.age}
                    onChangeText={(age)=> this.setState({age})}/>
                </View>
                <View style={ComponentStyle.inputInfoStyle}>
                  <Icon  style={ComponentStyle.iconStyle} name="transgender-alt" size={25} />
                  <Input placeholder="Enter your Gender" value={this.state.gender}
                    onChangeText={(gender)=> this.setState({gender})}/>
                </View>
                <View style={ComponentStyle.inputInfoStyle}>
                  <Icon  style={ComponentStyle.iconStyle} name="envelope" size={25} />
                  <Input placeholder="Enter your Email" multiline={true} value={this.state.email} keyboardType="email-address"
                    onChangeText={(email)=> this.setState({email})}/>
                </View>
                <View style={ComponentStyle.inputInfoStyle}>
                  <Icon  style={ComponentStyle.iconStyle} name="phone" size={25} />
                  <Input placeholder="Enter your Contact" keyboardType={'phone-pad'} value={this.state.contact}
                    onChangeText={(contact)=> this.setState({contact})} />
                </View>
                <View style={{ flexDirection: 'row'}}>
                  <Smallbtn onPress={this.onSubmit.bind(this)}> Save </Smallbtn>
                  <Smallbtn onPress={() => this.setState({Screen_Status:true, image: this.state.dbData.image})}> Cancle </Smallbtn>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
      }
      </ImageBackground>
    );
  }
}