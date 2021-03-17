import React from 'react'
import {View , Text , Image } from "react-native"
import {ChatRoom , User , Message} from "../../types"
import styles from './style'
import  ChatRoomData from '../data/Chats'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native'
    const ContactsListItem = (props) =>{
    const {users} = props;
  const naviagtion = useNavigation()
   const openChatRoom = () =>{
   console.warn('ChatRoom Opened')
  // naviagtion.navigate('ChatRoom' , {id : chatRoom.id})
  }

    return (
        <TouchableWithoutFeedback onPress= {openChatRoom} >
        <View style = {styles.container}>
        <View style = {styles.leftContainer} >
        <Image source = {{uri : props.contacts.imageUri}} style= {styles.avatar}/>
        <View style = {styles.midContainer}>
        <Text style = {styles.userName}> {props.contacts.name}</Text>
        <Text style = {styles.aboutInfo}> {props.contacts.aboutInfo}</Text>
             </View>
             </View>
           


        </View>
        </TouchableWithoutFeedback>
    )
}
export default ContactsListItem;