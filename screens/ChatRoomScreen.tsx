import React from 'react';
import {View , Text} from "react-native"
import {useRoute} from '@react-navigation/native'
import ChatMessages from '../components/ChatMessages';
import  ChatRoomData from '../data/Chats'
import { FlatList } from 'react-native-gesture-handler';

const ChatRoomScreen = (props) => {

    const route = useRoute();
    console.log("routeee", route.params)

    console.log("Proppppps", props)
    return (
        <View>
            <Text>Chatttrroom</Text>
            <FlatList
      style = {{width :"100%" }}
        data={ChatRoomData.messages}
        renderItem={({item}) => <ChatMessages  messages = {item} />}
        keyExtractor={(item) => item.id}
       // extraData={selectedId}
      />
           
            
        </View>
    )
}

export default  ChatRoomScreen