import React,{Component} from 'react';
import { View } from "react-native";
import firebase from 'firebase';
import Routes from './Routes';

// Firebase connection on App component
class App extends Component{ 
componentWillMount(){
  if (!firebase.apps.length){
    var config = {
  apiKey: "AIzaSyCm8L85DrH9HF2gHTLagwRoIHHwEshzG1s",
  authDomain: "assignment4-9c4e9.firebaseapp.com",
  databaseURL: "https://assignment4-9c4e9.firebaseio.com",
  projectId: "assignment4-9c4e9",
  storageBucket: "assignment4-9c4e9.appspot.com",
  messagingSenderId: "82171949243",
  appId: "1:82171949243:web:067ad78d0a9ef622"
  };
   firebase.initializeApp(config)
  }
}

  render(){
    return(
      <View style={{ flex: 1 }}>
        <Routes/>
      </View>
    )
  }
  
}

export default App;