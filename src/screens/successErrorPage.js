import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const SuccessErrorPage = ({ route }) => {
  const { status, message, nextPage } = route.params;
  const navigation = useNavigation();
  if (status == "success") {
    return (
      <View>
        <StatusBar backgroundColor={"#16E875FF"} color={"#fff"} />
        <Image source={require('../../assets/success.gif')} style={{ width: "auto", height: "auto" }} />
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
              backgroundColor: "#16E875FF"
            }}
            onPress={() => navigation.navigate(nextPage)}
          >
            <Text style={{ textAlign: "center", color: "#fff" }}>Submit</Text>
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
