import React , {useState} from 'react'
import {View , Text } from 'react-native'
import styles from "./style"
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const InputBox = () =>{
    const [typedMsg, setTypedMsg] = useState ('')

    const onMicroPhonePress = () =>{
        console.warn('sending msggggg Microhpne')
    }
    const onSendPress = () =>{
        console.warn('sending msggggg onSendPress')
    }

    const onPress =  () =>{
        if (!typedMsg) {
            onMicroPhonePress();
        }
        else 
        onSendPress()

    }
    return (
      <View style = {styles.container}>
          <View style = {styles.mainContainer}>
              <TouchableOpacity>
          <FontAwesome5 name="smile" size={24} color="grey" />
          </TouchableOpacity>

          <TextInput multiline style = {styles.textInput}  placeholder = {"Type a message"} onChangeText = {setTypedMsg}/>
          <TouchableOpacity>
{ !typedMsg &&
          <FontAwesome5  style = {{ "marginHorizontal" : 10}} name="camera" size={24} color="grey" />}
          </TouchableOpacity>
          <TouchableOpacity>
          <Ionicons name="attach" size={24} color="grey" />
          </TouchableOpacity>

          </View>
          <TouchableOpacity onPress = {onPress}>
          <View style= {styles.lastContainer}>
              { !typedMsg ?
          <FontAwesome5 name="microphone" size={24} color="white" /> 
          :<Ionicons name="send" size={24} color="white" />
              }

          </View>
          </TouchableOpacity>

      </View>
    )
}

export default InputBox;
