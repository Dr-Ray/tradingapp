import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SuccessErrorPage = ({ route }) => {
  const { status, message, nextPage } = route.params;
  const navigation = useNavigation();
  if (status == "success") {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems:'center', padding:20, backgroundColor:"#FFFFFF"}}>
        <StatusBar backgroundColor={"#16E875FF"} color={"#fff"} />
        <Image source={require('../../assets/success.gif')} style={{ width: 200, height: 200 }} />
        <Text style={{lineHeight:20, fontSize:15, textAlign:"center", fontWeight:'bold', margin:10}}>
          {message}
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 80,
            marginBottom: 20
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              width: "50%",
              padding: 15,
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "#16E875FF"
            }}
            onPress={() => navigation.navigate('history')}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <StatusBar backgroundColor={"#E61515FF"} color={"#fff"} />
        <Text>
          {message}
        </Text>
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "auto",
            height: 80,
            marginBottom: 20
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 20,
              width: "50%",
              padding: 15,
              justifyContent: "center",
              borderRadius: 20,
              backgroundColor: "#E61515FF"
            }}
            onPress={() => navigation.navigate(nextPage)}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default SuccessErrorPage;

const styles = StyleSheet.create({});
