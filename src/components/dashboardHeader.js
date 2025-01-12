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
        paddingVertical:10,
    }}>
      <View 
        style={{
            flexDirection:"row", 
            gap:20,
            alignItems:"center"
        }}>
        <View style={{
                width:40, 
                height:40, 
                borderRadius: 1000,
                backgroundColor:"red",
                
                justifyContent:"center",
                alignItems:"center"
            }}> 
          <Text style={{color:"#fff",}}>{user.fullname[0]}</Text>
          </View>
        <View>
            <Text style={{color:"#fff",fontSize:18,fontWeight:"bold"}}>{user.fullname}</Text>
            <Text style={{color:"#fff"}}>Welcome!</Text>
        </View>
      </View>
      <Ionicons name='notifications' color={"#fff"} size={20} onPress={() => navigation.navigate('notification')}/>
    </View>
  )
}

export default DashboardHeader

const styles = StyleSheet.create({})