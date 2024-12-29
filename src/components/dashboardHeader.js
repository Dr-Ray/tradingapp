import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AppContext } from '../../appContext';
import { useNavigation } from '@react-navigation/native';

const DashboardHeader = () => {
  const navigation = useNavigation();
  const { user } = useContext(AppContext);
  return (
    <View 
    style={{
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-between", 
        width:"100%",
        paddingVertical:20,
    }}>
      <View 
        style={{
            flexDirection:"row", 
            gap:20,
            alignItems:"center"
        }}>
        <View style={{
                width:50, 
                height:50, 
                borderRadius: 1000,
                backgroundColor:"red",
                
                justifyContent:"center",
                alignItems:"center"
            }}> 
          <Text style={{color:"#fff",}}>S</Text>
          </View>
        <View>
            <Text style={{color:"#fff",fontSize:20,fontWeight:"bold"}}>{user.fullname}</Text>
            <Text style={{color:"#fff"}}>Welcome!</Text>
        </View>
      </View>
      <Ionicons name='notifications' color={"#fff"} size={20} onPress={() => navigation.navigate('notification')}/>
    </View>
  )
}

export default DashboardHeader

const styles = StyleSheet.create({})