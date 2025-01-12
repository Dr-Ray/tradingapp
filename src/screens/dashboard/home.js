import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useContext, useState } from "react";
import DashboardHeader from "../../components/dashboardHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import TopMarket from "../../components/topMarket";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../appContext";
import Ionicons from "react-native-vector-icons/Ionicons";

const DashboardHome = () => {
  const { user, setUser, myBal, seeBal } = useContext(AppContext);
  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      name: "Deposit",
      tab: "deposit",
      icon: "cash"
    },
    {
      id: 2,
      name: "Withdraw",
      tab: "withdraw",
      icon: "cash"
    },
    {
      id: 3,
      name: "History",
      tab: "history",
      icon: "time"
    }
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "#090909", height: "100%" }}>
      <StatusBar backgroundColor={"#090909"} color={"#fff"} />
      <View style={{ backgroundColor: "#090909", height: "100%" }}>
        <View style={{ height: 130, padding: 10 }}>
          <DashboardHeader />
          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#fff", width: 100 }}>Main Balance</Text>
              {myBal
                ? <Ionicons
                    name={`eye-outline`}
                    size={23}
                    color={"#fff"}
                    onPress={() => seeBal(!myBal)}
                  />
                : <Ionicons
                    name={`eye-off-outline`}
                    size={23}
                    color={"#fff"}
                    onPress={() => seeBal(!myBal)}
                  />}
            </View>

            {myBal
              ? <Text style={{ color: "#fff", fontSize: 20 }}>
                  ${user.mainBalance}
                </Text>
              : <Text style={{ color: "#fff", fontSize: 20 }}>****</Text>}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 10
          }}
        >
          <FlatList
            data={DATA}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <TouchableOpacity
                style={{
                  width: 100,
                  backgroundColor: "#141414",
                  height: 80,
                  borderRadius: 10,
                  paddingHorizontal: 13,
                  marginRight: 10,
                  justifyContent: "space-evenly"
                }}
                onPress={() => navigation.navigate(item.tab)}
              >
                <Ionicons
                  name={`${item.icon}-outline`}
                  size={23}
                  color={"#fff"}
                  style={{ textAlign: "center" }}
                />
                <Text
                  style={{ color: "#fff", textAlign: "center", fontSize: 10 }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>}
          />
        </View>
        <TopMarket user={user} setUser={setUser} />
      </View>
    </SafeAreaView>
  );
};

export default DashboardHome;

const styles = StyleSheet.create({});
