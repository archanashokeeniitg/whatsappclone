import {StyleSheet} from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from "../../constants/Colors"
const styles = StyleSheet.create ({
    container :{
        flexDirection : "row",
        margin : 10,
        alignItems : 'flex-end'
    },
    mainContainer :{
        flexDirection : "row",
        backgroundColor : "white",
        padding : 10,
        margin : 10,
        borderRadius : 30,
       flex :1,
       alignItems : 'flex-end'

    },
    textInput:{
        flex :1,
        marginHorizontal :10,


    },
    lastContainer:{
        backgroundColor : Colors.light.tint,
        borderRadius : 50,
        height : 50,
        width: 50,
        justifyContent : 'center',
        alignItems : 'center'


    }
})
export default styles;