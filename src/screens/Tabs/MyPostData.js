import React,{Component} from 'react';
import {View, Text} from 'react-native';
import {CardSection,Card} from '../../common';

// Reusable MyPostData component to display each post 
const MyPostData = ({data}) => {
    const{title,discription} = data  // Fetching data from parent component as prop
    const {titleTextStyle,discriptionTextStyle} = styles

  return(
    <Card>
      <CardSection>
        <View style={{flexDirection: 'column'}}>
          <Text style={titleTextStyle}>Title : {title}</Text>
          <Text style={discriptionTextStyle}>Discription : {discription}</Text>
        </View>
      </CardSection>
    </Card>
 );
}

const styles = {
  titleTextStyle:{
      fontFamily: 'serif',
      fontSize : 18,
      padding:4,
      color: '#FFFFFF'
  },
  discriptionTextStyle:{
      fontFamily: 'serif',
      padding:4,
      fontSize : 16,
      color: '#FFFFFF'
  },
 };

export default MyPostData;
