import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
   
    container :{
       // flexDirection : 'row',
         //width : "100%",
        justifyContent :"space-between",
        padding :10,

    },
    messageBox:{
       
        borderRadius : 5,
        padding : 10

    },
    time :{
        color : "gray",
        paddingTop : 10,
        alignSelf : "flex-end",
        fontSize : 12
    },
    userName : {
        color : "black"
    }
})
export default styles;