import React from 'react'
import {View , Text , Image } from "react-native"
import {ChatRoom , User , Message} from "../../types"
import styles from './style'
import moment from "moment"
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native'
import Navigation from '../../navigation'

// export type ChatListItemProps ={
//     chatRoom : ChatRoom;
// }

// const ChatListItem = (props: ChatRoom ) =>{
    const ContactsListItem = (props) =>{
    const {users} = props;
    console.log("propeeessssss", props);
//    const user =  chatRoom.users[1]
//    const naviagtion = useNavigation()
//    const OnClick = () =>{
//    console.warn(`clickkedddd on ${user.name}`)
//    naviagtion.navigate('ChatRoom' , {id : chatRoom.id , user : user.name})
  // }

    return (
        <TouchableWithoutFeedback >
        <View style = {styles.container}>
            <View style = {styles.leftContainer} >
        <Image   source = {{uri : props.contacts.imageUri}} style= {styles.avatar}/>
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