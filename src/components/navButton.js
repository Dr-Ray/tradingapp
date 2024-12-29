import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const NavButton = ({text, screen}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:bgColor?bgColor:"#00f"}]} onPress={() => navigation.navigate(screen)}>
        <Text style={[styles.textCenter, {color:textColor?textColor:"#fff"}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default NavButton;

const styles = StyleSheet.create({
    button: {
        borderRadius:100,
        width:"100%",
        height:70,
        justifyContent:"center",
        marginBottom:20,
        marginBottom:20
    },
    textCenter:{
        textAlign:"center"
    }
});