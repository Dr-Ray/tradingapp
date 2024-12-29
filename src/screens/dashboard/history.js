import { FlatList, RefreshControl, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useContext, useEffect, useState } from "react";
import LoadingWidget from "../../components/loadingWidget";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardHeader from "../../components/dashboardHeader";
import { AppContext } from "../../../appContext";

const HistoryPage = () => {
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      fetch('https://stocksfxpro.com/api/user/history/all', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid:user.userid,
        })
      })
        .then(resp => resp.json())
        .then(response => {
            setHistory(response.history);
          setRefreshing(false);
        })
        .catch(err => Alert.alert("Error.... "+ err.message));
    }, []);

  useEffect(() => {
    getNotification();
  }, []);

  async function getNotification() {
    setLoading(true);
    try {
      const url = "https://stocksfxpro.com/api/user/history/all";
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userid: user.userid
        })
      });

      const response = await resp.json();
      if (response.status === 400) {
        setLoading(false);
        return;
      } else {
        setHistory(response.history);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  }
  if (loading) {
    return <LoadingWidget />;
  } else {
    return (
      <SafeAreaView style={{ backgroundColor: "#090909", height: "100%" }}>
        <StatusBar backgroundColor={"#090909"} color={"#fff"} />
        <View style={{ height: 100, padding: 10 }}>
          <DashboardHeader />
          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "#161616",
            height: "100%",
            padding: 10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
              History
            </Text>
          </View>
          {history.length > 0
            ? <FlatList
                data={history}
                renderItem={({ item, idx }) =>
                  <View key={idx} style={{ width: "100%", padding: 10 }}>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 10
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: 20
                        }}
                      >
                        ${item.amount}
                      </Text>
                      <View>
                        <Text
                          style={{
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: 13
                          }}
                        >
                          {item.method} ({item.type})
                        </Text>
                        <Text style={{ color: "#fff", fontSize: 10 }}>
                          {item.createdAt}
                        </Text>
                      </View>
                      {(item.status == 1)
                        ? <Text
                            style={{
                              color: "#fff",
                              textAlign: "center",
                              backgroundColor: "#16E875FF",
                              paddingTop: 2,
                              paddingBottom: 2,
                              width: 80,
                              borderRadius: 50
                            }}
                          >
                            Completed
                          </Text>
                        : <Text
                            style={{
                              color: "#fff",
                              textAlign: "center",
                              backgroundColor: "#FF8B8E",
                              paddingTop: 2,
                              paddingBottom: 2,
                              width: 80,
                              borderRadius: 50
                            }}
                          >
                            Pending
                          </Text>}
                    </View>
                    <View style={{ width: "100%", alignItems: "center" }}>
                      <View
                        style={[
                          {
                            backgroundColor: "#1B1B1B",
                            height: 2,
                            width: "93%"
                          }
                        ]}
                      />
                    </View>
                  </View>}
                refreshControl={
                          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                        }
              />
            : <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text>No history</Text>
              </View>}
        </View>
      </SafeAreaView>
    );
  }
};

export default HistoryPage;

const styles = StyleSheet.create({});
