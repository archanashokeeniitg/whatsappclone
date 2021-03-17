import React from 'react'
import {View, Text} from "react-native"
import {Message} from "../../types"
import moment from "moment"
import styles from '../ChatMessages/style'

 export type ChatMessageProps = {
     messages : Message

 }

const  ChatMessages= ( props :ChatMessageProps )=> {
    const {messages} = props 
    console.log("propssss #############", props)

    const isMyMessage = () =>{
    return messages.user.id === 'u1'
    }
    return (
        <View style = {styles.container}>
            <View  style = {[styles.messageBox ,{backgroundColor : isMyMessage() ? '#DCF8C5' :"white"}, {marginRight : isMyMessage() ? 0 : 50 }, {marginLeft : isMyMessage() ? 50 : 0 }]}>
            <Text style = {styles.userName}>{messages.user.name}</Text>

            <Text>{messages.content}</Text>
         <Text style = {styles.time}>{moment(messages.createdAt).format('LT')}</Text> 
        </View>
        </View>
    )
}
export default ChatMessages