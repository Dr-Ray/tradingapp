import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../appContext";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  FlatList
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

const CopyTraders = () => {
  const { user } = useContext(AppContext);
  const [srch, setSrch] = useState("");
  const [loading, setLoading] = useState(true);
  const [traders, setTraders] = useState([]);
  const [SearchTraders, setSearchTraders] = useState([]);
  const [up, setUp] = useState(0);
  const [openSearch, setOpenSearch] = useState(true);

  useEffect(
    () => {
      fetchData();
      console.log(traders);
    },
    [up]
  );

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://stocksfxpro.com/api/user/traders/all`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ userid: user.userid })
        }
      );
      const resp = await response.json();
      if (resp.status === 400) {
        setLoading(false);
        return;
      } else {
        setTraders(resp.traders);
        setLoading(false);
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  };

  const TradeCopyRequest = async traderID => {
    let copy = {
      trader_id: traderID,
      copier_id: user.userid
    };

    const response = await fetch(
      `https://stocksfxpro.com/api/user/traders/copy`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(copy)
      }
    );

    const resp = await response.json();
    if (resp.status === 200) {
      setUp(up + 1);
    } else {
      Alert.alert("Error", resp.message);
    }
  };


  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          height: "100%",
          left: 0,
          top: 0,
          width: "100%",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <ActivityIndicator size={32} />
      </View>
    );
  } else {
    return (
      <SafeAreaView>
        <View
          style={{
            marginTop: 10,
            marginBottom: 0,
            width: "100%"
          }}
        >
          <View
            style={{
              height: 50,
              width: "100%",
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <View style={styles.inputWrapper}>
              <Ionicons name={`search-outline`} size={23} color={"#fff"} />
              <TextInput
                placeholder="Search here"
                inputMode="text"
                placeholderTextColor="#fff"
                value={srch}
                onChangeText={text => {
                  setSrch(text);
                  setOpenSearch(true);
                  if (text.length > 0) {
                    let search = traders.filter(trader =>
                      trader.name
                        .toLowerCase()
                        .includes(text.toLocaleLowerCase())
                    );
                    setSearchTraders(search);
                  } else {
                    setSearchTraders([]);
                  }
                }}
                style={styles.inputText}
              />
            </View>
            <Text
              onPress={() => {
                setSrch("");
                setOpenSearch(false);
              }}
              style={{ marginLeft: 10 }}
            >
              Cancel
            </Text>
          </View>
        </View>
            
        {openSearch &&
            <View
              style={{
                position: "absolute",
                top: 65,
                left: 0,
                width: "100%",
                height: "100%",
                flex:1,
                zIndex:9,
                backgroundColor: "#fff",
                paddingHorizontal:10
              }}
            >
              <FlatList
              data={SearchTraders}
              renderItem={(trader, index) =>
                <View
                  style={{
                    backgroundColor: "red",
                    borderWidth: 2,
                    borderColor: "#000",
                    marginVertical: 8,
                    borderRadius: 10
                  }}
                  key={index}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 8
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      {/* <Image source={{uri:`https://stocksfxpro.com/uploads/${trader.image}`}} style={{height:40,width:40,borderRadius:100,position:"relative"}} /> */}
                      <View style={{ marginLeft: 8 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8
                          }}
                        >
                          <Text>
                            {trader.name}
                          </Text>
                          {/* {(trader.verified === "1") && (<img src='assets/twitter.jpeg' style={{width:"15px"}}  alt='te'/>)} */}
                        </View>
                      </View>
                    </View>
                    {/* {trader?.copier.length > 0
                    ? trader.copier.map(
                        (copier, index) =>
                          copier.accepted === "1"
                            ? <View style={{ marginLeft: 8 }} key={index}>
                                <TouchableOpacity>
                                  <Text>Accepted</Text>
                                </TouchableOpacity>
                              </View>
                            : <View style={{ marginLeft: 8 }} key={index}>
                                <TouchableOpacity>
                                  <Text>Requested</Text>
                                </TouchableOpacity>
                              </View>
                      )
                    : <View style={{ marginLeft: 8 }}>
                        <TouchableOpacity
                          data-trader={trader.id}
                          onPress={() => TradeCopyRequest(trader.id)}
                        >
                          <Text>copy</Text>
                        </TouchableOpacity>
                      </View>} */}
                  </View>
                  <Text
                  >{`https://stocksfxpro.com/uploads/${trader.image}`}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text>ROI</Text>
                        <Text className="text-green">
                          +{trader.roi}%
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text>Minimum</Text>
                        <Text>
                          +{trader.minimum}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text>Win Rate</Text>
                        <Text>
                          +{trader.win_percent}%
                        </Text>
                      </View>
                    </View>

                    <View style={{ textAlign: "right" }}>
                      <View style={{ marginVertical: 8 }}>
                        <Text>Stability Index</Text>
                        <Text>
                          {trader.stabilityIndex}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>}
            />
            </View>}

        <View style={{ paddingHorizontal: 10 }}>
          {
            <FlatList
              data={traders}
              renderItem={(trader, index) =>
                <View
                  style={{
                    marginVertical: 8,
                    borderRadius: 10,
                    elevation:0.5
                  }}
                  key={index}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 8
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      {/* <Image source={{uri:`https://stocksfxpro.com/uploads/${trader.image}`}} style={{height:40,width:40,borderRadius:100,position:"relative"}} /> */}
                      <View style={{ marginLeft: 8 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8
                          }}
                        >
                          <Text>
                            {trader.name}
                          </Text>
                          {/* {(trader.verified === "1") && (<img src='assets/twitter.jpeg' style={{width:"15px"}}  alt='te'/>)} */}
                        </View>
                      </View>
                    </View>
                    {/* {trader?.copier.length > 0
                    ? trader.copier.map(
                        (copier, index) =>
                          copier.accepted === "1"
                            ? <View style={{ marginLeft: 8 }} key={index}>
                                <TouchableOpacity>
                                  <Text>Accepted</Text>
                                </TouchableOpacity>
                              </View>
                            : <View style={{ marginLeft: 8 }} key={index}>
                                <TouchableOpacity>
                                  <Text>Requested</Text>
                                </TouchableOpacity>
                              </View>
                      )
                    : <View style={{ marginLeft: 8 }}>
                        <TouchableOpacity
                          data-trader={trader.id}
                          onPress={() => TradeCopyRequest(trader.id)}
                        >
                          <Text>copy</Text>
                        </TouchableOpacity>
                      </View>} */}
                  </View>
                  <Text
                  >{`https://stocksfxpro.com/uploads/${trader.image}`}</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text>ROI</Text>
                        <Text className="text-green">
                          +{trader.roi}%
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text>Minimum</Text>
                        <Text>
                          +{trader.minimum}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text>Win Rate</Text>
                        <Text>
                          +{trader.win_percent}%
                        </Text>
                      </View>
                    </View>

                    <View style={{ textAlign: "right" }}>
                      <View style={{ marginVertical: 8 }}>
                        <Text>Stability Index</Text>
                        <Text>
                          {trader.stabilityIndex}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>}
            />
          }
        </View>

      </SafeAreaView>
    );
  }
};

export default CopyTraders;
const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 400,
    paddingHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    overflow: "hidden",
    flex: 1
  },
  inputText: {
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    color: "#fff"
  }
});
