import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Button = ({ text, bgColor, textColor, btnPressed, screen, icon}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:bgColor}]} onPress={() => btnPressed(screen)}>
            <Text style={[styles.textCenter, {color:textColor}]}>{text}</Text>
            {
                icon&&(
                    <Ionicons name={icon} size={20} color={"#fff"}/>
                ) 
            }
        </TouchableOpacity>
    )
}
// const Button = ({ text, bgColor, textColor, btnPressed, screen }) => {
//     return (
//         <TouchableOpacity style={[styles.button, {backgroundColor:bgColor}]} onPress={() => btnPressed(screen)}>
//             <Text style={[styles.textCenter, {color:textColor}]}>{text}</Text>
//         </TouchableOpacity>
//     )
// }
 
export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius:100,
        width:"100%",
        padding:15,
        justifyContent:"center",
        marginBottom:20,
        marginBottom:20,
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    textCenter:{
        textAlign:"center"
    }
});