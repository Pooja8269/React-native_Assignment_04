import React from "react";
import { ScrollView,Text,ActivityIndicator, View,ImageBackground,Image,TouchableOpacity,TextInput,StyleSheet,Dimensions} from 'react-native';
import { ViewImageButton,Button,Floatingbtn,DialogBoxBtn } from '../../common';
import ComponentStyle from '../ComponentStyle'; 
import MyPostData from './MyPostData'
import axios from 'axios'; 
import firebase from 'firebase';
import Dialog from "react-native-dialog";
import Icon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

// MyPost tab 
class MyPost extends React.Component {
    constructor(props){
      super(props)
        this.state = {dbData:{}, postData:[], title:'',discription:'', dialogVisible: false}; // Initial state 
    }

    componentWillMount(){
      // Fetched data from firebase profile table
      firebase.database().ref('profile').on('value', (data)=>{
        this.setState({dbData : data.toJSON()});
      })
      // Fetched data from firebase myPost table
      firebase.database().ref('myPost').on('value', (data)=>{
        const objData = data.toJSON();
        let arrData =  Object.keys(objData).map((key)=>{
          return objData[key]
      })
        this.setState({postData : arrData})
      })
    }
    // onButtonPress function to add new post
    onButtonPress = () => {
      if(this.state.title != '' && this.state.discription != ''){
        // Adding post to firebase myPost table
        firebase.database().ref('myPost').push(
        { 
          title :this.state.title, 
          discription: this.state.discription,
        }).then(() => { console.log("Done") })
        .catch((Error) => { console.log(Error) });
          this.setState({ title: '' , discription: '', dialogVisible: false, });
      }else{
          alert("Please fill out all fields!");
          this.setState({ title: '' , discription: '', dialogVisible: false, });
      }
    };
    // Add post show DialogBox funtion
    showDialogBox = () => {
      this.setState({ dialogVisible: true });
    }
    // Add post hide DialogBox funtion
    handleCancle = () => {
      this.setState({ title: '' , discription: '', dialogVisible: false, });
    };
    //Render function to render all post
    renderAlbums(){
      return this.state.postData.map(postData => <MyPostData data={postData}/>);
    }

  render() {
    return (
      <ImageBackground style={ComponentStyle.bgImageStyle} source={require('../../../assets/Dark.jpg')}>
          <View style={{flexDirection: 'row', borderBottomColor:'#FFFFFF', borderBottomWidth:1, marginBottom:1}}>
              <View style={ComponentStyle.postImageBorderStyle}>
                <Image style={ComponentStyle.editinnerStyle} source={{ uri: this.state.dbData.image}} />
              </View>
              <Text style={{alignSelf:'center', justifyContent:'center',marginLeft:30, color:'#fff', fontSize:18, fontFamily:'serif'}}>{this.state.dbData.name}</Text>
          </View>
          <View>
              <Dialog.Container visible={this.state.dialogVisible}>
                <Dialog.Title>Add Post</Dialog.Title>
                <TextInput style={ComponentStyle.dialogBoxTitleStyle} placeholder="Add title" 
                  value={this.state.title}
                  onChangeText={(title) => this.setState({ title })} 
                /> 
                <TextInput  style={ComponentStyle.dialogBoxDiscriptionStyle} multiline={true} placeholder="Add discription" 
                  value={this.state.discription}
                  onChangeText={(discription) => this.setState({ discription })}
                />
                <View style={{ flexDirection: 'row'}}>
                  <DialogBoxBtn onPress={this.onButtonPress.bind(this)} > Post </DialogBoxBtn>
                  <DialogBoxBtn onPress={this.handleCancle}> Cancle </DialogBoxBtn>
                </View>
              </Dialog.Container>
          </View>

          <ScrollView>
            {this.renderAlbums()}         
          </ScrollView> 
          <Floatingbtn onPress={this.showDialogBox}/> 
      </ImageBackground> 
    );
  }
}
   
export default MyPost;