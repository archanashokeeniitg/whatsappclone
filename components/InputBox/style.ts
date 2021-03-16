import {StyleSheet} from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from "../../constants/Colors"
const styles = StyleSheet.create ({
    container :{
        flexDirection : "row",
        margin : 10

    },
    mainContainer :{
        flexDirection : "row",
        backgroundColor : "white",
        padding : 10,
        margin : 10,
        borderRadius : 50,
       flex :1

    },
    micContainer:{
        backgroundColor : Colors.light.tint,
        borderRadius : 50,
        height : 50,
        width: 50,
        justifyContent : 'center',
        alignItems : 'center'


    }
})
export default styles;