import React from 'react';
import {View , Text , ImageBackground} from "react-native"
import {useRoute} from '@react-navigation/native'
import ChatMessages from '../components/ChatMessages';
import  ChatRoomData from '../data/Chats'
import { FlatList } from 'react-native-gesture-handler';
import BG from "../data/BG.png"


const ChatRoomScreen = (props) => {

    const route = useRoute();
    console.log("routeee", route.params)

    console.log("Proppppps", props)
    return (
      <ImageBackground  source = {BG} style = {{width: "100%" , height : "100%"}}>
            <Text>Chatttrroom</Text>
            <FlatList
      style = {{width :"100%" }}
        data={ChatRoomData.messages}
        renderItem={({item}) => <ChatMessages  messages = {item} />}
        keyExtractor={(item) => item.id}
        inverted 
      />
      </ImageBackground>
           
    )
}

export default  ChatRoomScreen