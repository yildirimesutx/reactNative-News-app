import { StyleSheet, Dimensions } from "react-native";



export default StyleSheet.create({
    container : {
        backgroundColor:'white',
        margin: 10,
        borderRadius:8
    },
    image : { height : Dimensions.get('window').height /4},
    title : {
        fontWeight: 'bold',
        fontSize : 18
    },
    description : {
        marginTop:5
    },

    author : {
        fontStyle:'italic',
        textAlign : 'right'
    },

    inner_container : {
        padding:5
    }



})