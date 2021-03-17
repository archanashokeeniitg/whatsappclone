import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles"
import {View , Text} from "react-native"
import {useNavigation} from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const NewMessageButton = () =>{
    const navigation = useNavigation()

    const onClick = () =>{
        console.warn("contacts route Clicked")
        navigation.navigate('Contacts')
        }
    return(
        
    <View style = {styles.floatingContainer} >
        <TouchableOpacity onPress = {onClick} >
        <MaterialCommunityIcons name="message" size={24} color="white" />
        </TouchableOpacity>
    </View>
   
    )

}
 export  default NewMessageButton;
