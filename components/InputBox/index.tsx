import React from 'react'
import {View , Text} from 'react-native'
import styles from "./style"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

const InputBox = () =>{
    return (
      <View style = {styles.container}>
          <View style = {styles.mainContainer}>
          <FontAwesome5 name="smile" size={24} color="grey" />

          <FontAwesome5 name="camera" size={24} color="grey" />
          <Ionicons name="attach" size={24} color="grey" />
          <TextInput />

          </View>
          <View style= {styles.micContainer}>
          <FontAwesome5 name="microphone" size={24} color="white" />
          {/* <Ionicons name="mic-circle-sharp" size={24} color="white" /> */}

          </View>

      </View>
    )
}

export default InputBox;
