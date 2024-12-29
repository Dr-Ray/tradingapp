import { Image, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../appContext";

const ProfileDesign = () => {
  const { user } = useContext(AppContext);
  return (
    <View style={{ paddingVertical: 20, gap: 10 }}>
      <View style={{ alignItems: "center", gap: 8 }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 1000,
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 32 }}>
            {user.fullname[0]}
          </Text>
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#fff" }}>
          {user.fullname}
        </Text>
        <Text style={{ fontSize: 18, color: "#fff" }}>
          {user.email}
        </Text>
        <Text style={{ fontSize: 18, color: "#fff" }}>
          {user.phone}
        </Text>
      </View>
    </View>
  );
};

export default ProfileDesign;

const styles = StyleSheet.create({});
