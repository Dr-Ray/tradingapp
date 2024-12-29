import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Modal } from 'react-native';

const Logout = () => {
    const navigation = useNavigation();
    return (
        <View style={{ height: 300, position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center", width: "100%" }}>
            <View style={{ backgroundColor: "#0F0F0F", width: "95%", borderRadius: 20, padding: 20 }}>
                <Text style={{ textAlign: "center", color: "#fff" }}>Log Out</Text>
                <Text>Are you sure you want to leave</Text>
                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 60, justifyContent: "center", borderRadius: 100, backgroundColor: "#00f" }}>
                    <Text style={{ textAlign: "center", color: "#fff" }}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 60, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }} onPress={() => navigation.navigate('MyProfile')}>
                    <Text style={{ textAlign: "center", color: "#fff" }}>Cancel</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({})