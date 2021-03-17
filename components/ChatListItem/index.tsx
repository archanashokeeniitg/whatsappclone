import React from 'react'
import {View , Text , Image } from "react-native"
import {ChatRoom , User , Message} from "../../types"
import styles from './style'
import moment from "moment"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native'
import Navigation from '../../navigation'

export type ChatListItemProps ={
    chatRoom : ChatRoom;
}

// const ChatListItem = (props: ChatRoom ) =>{
    const ChatListItem = (props) =>{
    const {chatRoom} = props;
   const user =  chatRoom.users[1]
   const naviagtion = useNavigation()
   const OnClick = () =>{
   //console.warn(`clickkedddd on ${user.name}`)
   naviagtion.navigate('ChatRoom' , {id : chatRoom.id , user : user.name})
   }

    return (
        <TouchableWithoutFeedback onPress={OnClick}>
        <View style = {styles.container}>
            <View style = {styles.leftContainer} >
        <Image   source = {{uri : user.imageUri}} style= {styles.avatar}/>
        <View style = {styles.midContainer}>
        <Text style = {styles.userName}> {user.name}</Text>
            <Text style={styles.lastMessage}> {chatRoom.lastMessage.content}</Text>
             </View>
             </View>
            <Text style = {styles.time}>
            {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
           


        </View>
        </TouchableWithoutFeedback>
    )
}
export default ChatListItem;