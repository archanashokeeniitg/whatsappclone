import React from 'react'
import {View , Text , Image } from "react-native"
import {ChatRoom , User , Message} from "../../types"
import styles from './style'
export type ChatListItemProps ={
    chatRoom : ChatRoom;
}

// const ChatListItem = (props: ChatRoom ) =>{
    const ChatListItem = (props) =>{
    const {chatRoom} = props;
    console.log("Props", props)
   const user =  chatRoom.users[1]
   console.log("userrrrrr", user);
    return (
        <View style = {styles.container}>
            <View style = {styles.leftContainer} >
        <Image   source = {{uri : user.imageUri}} style= {styles.avatar}/>
        <View style = {styles.midContainer}>
        <Text style = {styles.userName}> {user.name}</Text>
            <Text style={styles.lastMessage}> {chatRoom.lastMessage.content}</Text>
            <Text style={styles.lastMessage}> {chatRoom.lastMessage.createdAt}</Text>
            </View>
            <Text style = {styles.time}>
                Yesterday
            </Text>
            </View>
           


        </View>
    )
}
export default ChatListItem;