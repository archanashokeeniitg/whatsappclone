import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    avatar :{
         width : 60,
         height : 60,
         borderRadius :50,
         marginRight : 10


    },
    container :{
        flexDirection : 'row',
        width : "100%",
        justifyContent :"space-between",
        padding :10,

    },
     leftContainer:{
         flexDirection :"row"
     },
     midContainer:{
         justifyContent : "space-between"

     },
     userName:{
         fontWeight : "bold",
         fontSize :16
     },
     
     aboutInfo :{
         color : "gray",
         fontSize : 12
     },
     

})
export default styles;