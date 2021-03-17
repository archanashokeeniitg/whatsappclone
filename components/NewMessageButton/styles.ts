import {StyleSheet} from 'react-native'
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colors from "../../constants/Colors"
const styles = StyleSheet.create ({
floatingContainer:{
    backgroundColor : Colors.light.tint,
    // backgroundColor : "red",
    borderRadius : 50,
    height : 50,
    width: 50,
    justifyContent : 'center',
    alignItems : 'center',
    position : 'absolute',
    bottom : 20,
    right : 10


}
})
export default styles ;