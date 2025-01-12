import {
  FlatList,
  StatusBar,
  Text,
  View
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../appContext";
import { SafeAreaView } from "react-native-safe-area-context";
import LoadingWidget from "../../components/loadingWidget";

const NotificationsPage = () => {
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotification();
  }, []);

  async function getNotification() {
    setLoading(true);
    try {
      const url = "https://stocksfxpro.com/api/user/notifications/all";
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
        setNotifications(response.notifications);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <LoadingWidget />
    );
  } else {
    return (
      <SafeAreaView
        style={{ backgroundColor: "#090909", height: "100%", padding: 10 }}
      >
        <StatusBar backgroundColor={"#090909"} color={"#fff"} />
          {notifications.length > 0 ? (
            <FlatList 
            data = {notifications}
            renderItem={({item, idx}) => (
              <><View key={idx} style={{ padding: 10, marginBottom: 10 }}>
                <Text style={{ color: "#fff", fontWeight: "bold" }}>
                  {item.createdAt}
                </Text>
                <Text style={{ color: "#fff" }}>{(item.message).replace(/\s+/g, ' ')}</Text>
              </View>
              <View style={{ width: "100%", alignItems: "center" }}>
                  <View
                    style={[
                      { backgroundColor: "#1B1B1B", height: 2, width: "98%" }
                    ]} />
                </View></>
            )}
          />
          ) : (
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
              <Text>No Notifications</Text>
            </View>
          )}
      </SafeAreaView>
    );
  }
};

export default NotificationsPage;