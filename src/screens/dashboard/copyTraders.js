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
  FlatList,
  ScrollView
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
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(
    () => {
      fetchData();
      // console.log(traders);
    },
    [up]
  );

  const fetchData = async () => {
    fetch(
      `https://stocksfxpro.com/api/user/traders/all`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ userid: user.userid })
      }
    ).then( response => response.json()).then(resp => {
      if (resp.status == 400) {
        setLoading(false);
        return;
      } else {
        setTraders(resp.traders);
        setLoading(false);
      }
    }).catch (err => {
      Alert.alert("Network error please try again");
      setLoading(false);
    });
  };

  const TradeCopyRequest = async (traderID) => {
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
      <SafeAreaView style={{ backgroundColor: "#090909", height: "100%" }}>
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
              style={{ marginLeft: 10, color:"#fff" }}
            >
              Cancel
            </Text>
          </View>
        </View>
            
        {openSearch &&
            <ScrollView
              style={{
                position: "absolute",
                top: 65,
                left: 0,
                width: "100%",
                height: "100%",
                flex:1,
                zIndex:9,
                backgroundColor: "#090909",
                paddingHorizontal:10
              }}
            >
                {
                  SearchTraders?.map((trader, index) => (
                    <View
                        style={{
                          borderWidth: 2,
                          borderColor: "#fff",
                          marginVertical: 8,
                          paddingHorizontal:10,
                          borderRadius: 10
                        }}
                        key={index}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginVertical: 8,
                            justifyContent:"space-between"
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              marginVertical: 8
                            }}
                          >
                            <Image source={{uri:`https://stocksfxpro.com/uploads/${trader.image}`}} style={{height:40,width:40,borderRadius:100,position:"relative"}} />
                            <View style={{ marginLeft: 8 }}>
                              <View
                                style={{
                                  flexDirection: "row",
                                  alignItems: "center",
                                  gap: 8
                                }}
                              >
                                <Text style={{color:"#fff"}}>
                                  {trader.name}
                                </Text>
                                {/* {(trader.verified === "1") && (<img src='assets/twitter.jpeg' style={{width:"15px"}}  alt='te'/>)} */}
                              </View>
                            </View>
                          </View>
                          {(trader?.copier.length > 0)
                          ? trader.copier.map(
                              (copier, index) =>
                                copier.accepted === "1"
                                  ? <View style={{ marginLeft: 8 }} key={index}>
                                      <TouchableOpacity style={{backgroundColor:"green", color:"#fff", borderRadius:10, width:80, paddingVertical:10}}>
                                        <Text style={{textAlign:"center",color:"#fff", fontSize:10}}>Accepted</Text>
                                      </TouchableOpacity>
                                    </View>
                                  : <View style={{ marginLeft: 8 }} key={index}>
                                      <TouchableOpacity style={{backgroundColor:"blue", color:"#fff", borderRadius:10, width:80, paddingVertical:14}}>
                                        <Text style={{textAlign:"center", color:"#fff", fontSize:10}}>Requested</Text>
                                      </TouchableOpacity>
                                    </View>
                            )
                          : <View style={{ marginLeft: 8 }}>
                              <TouchableOpacity
                                style={{backgroundColor:"#aaa", color:"#fff", borderRadius:10, width:80, paddingVertical:10}}
                                onPress={() => TradeCopyRequest(trader.id)}
                              >
                                <Text style={{textAlign:"center"}}>Copy</Text>
                              </TouchableOpacity>
                            </View>}
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"
                          }}
                        >
                          <View>
                            <View style={{ marginVertical: 8 }}>
                              <Text style={{color:"#fff"}}>ROI</Text>
                              <Text className="text-green"  style={{color:"green"}}>
                                +{trader.roi}%
                              </Text>
                            </View>
                          </View>
      
                          <View>
                            <View style={{ marginVertical: 8 }}>
                              <Text style={{color:"#fff"}}>Minimum</Text>
                              <Text style={{color:"#fff"}}>
                                +{trader.minimum}
                              </Text>
                            </View>
                          </View>
      
                          <View>
                            <View style={{ marginVertical: 8 }}>
                              <Text style={{color:"#fff"}}>Win Rate</Text>
                              <Text style={{color:"#fff"}}>
                                +{trader.win_percent}%
                              </Text>
                            </View>
                          </View>
      
                          <View style={{ textAlign: "right" }}>
                            <View style={{ marginVertical: 8 }}>
                              <Text style={{color:"#fff"}}>Stability Index</Text>
                              <Text style={{color:"#fff"}}>
                                {trader.stabilityIndex}
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                  ))
                }
            </ScrollView>}

        <ScrollView>
        <View style={{ paddingHorizontal: 10 }}>
          {
            traders?.map((trader, index) => (
              <View
                  style={{
                    borderWidth: 2,
                    borderColor: "#fff",
                    marginVertical: 8,
                    paddingHorizontal:10,
                    borderRadius: 10
                  }}
                  key={index}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 8,
                      justifyContent:"space-between"
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 8
                      }}
                    >
                      <Image source={{uri:`https://stocksfxpro.com/uploads/${trader.image}`}} style={{height:40,width:40,borderRadius:100,position:"relative"}} />
                      <View style={{ marginLeft: 8 }}>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8
                          }}
                        >
                          <Text style={{color:"#fff"}}>
                            {trader.name}
                          </Text>
                          {/* {(trader.verified === "1") && (<img src='assets/twitter.jpeg' style={{width:"15px"}}  alt='te'/>)} */}
                        </View>
                      </View>
                    </View>
                    {(trader?.copier.length > 0)
                    ? trader.copier.map(
                        (copier, index) =>
                          copier.accepted === "1"
                            ? <View style={{ marginLeft: 8 }} key={index}>
                                <TouchableOpacity style={{backgroundColor:"green", color:"#fff", borderRadius:10, width:80, paddingVertical:10}}>
                                  <Text style={{textAlign:"center",color:"#fff", fontSize:10}}>Accepted</Text>
                                </TouchableOpacity>
                              </View>
                            : <View style={{ marginLeft: 8 }} key={index}>
                                <TouchableOpacity style={{backgroundColor:"blue", color:"#fff", borderRadius:10, width:80, paddingVertical:14}}>
                                  <Text style={{textAlign:"center", color:"#fff", fontSize:10}}>Requested</Text>
                                </TouchableOpacity>
                              </View>
                      )
                    : <View style={{ marginLeft: 8 }}>
                        <TouchableOpacity
                          style={{backgroundColor:"#aaa", color:"#fff", borderRadius:10, width:80, paddingVertical:10}}
                          onPress={() => TradeCopyRequest(trader.id)}
                        >
                          <Text style={{textAlign:"center"}}>Copy</Text>
                        </TouchableOpacity>
                      </View>}
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text style={{color:"#fff"}}>ROI</Text>
                        <Text  style={{color:"green"}}>
                          +{trader.roi}%
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text style={{color:"#fff"}}>Minimum</Text>
                        <Text style={{color:"#fff"}}>
                          +{trader.minimum}
                        </Text>
                      </View>
                    </View>

                    <View>
                      <View style={{ marginVertical: 8 }}>
                        <Text style={{color:"#fff"}}>Win Rate</Text>
                        <Text style={{color:"#fff"}}>
                          +{trader.win_percent}%
                        </Text>
                      </View>
                    </View>

                    <View style={{ textAlign: "right" }}>
                      <View style={{ marginVertical: 8 }}>
                        <Text style={{color:"#fff"}}>Stability Index</Text>
                        <Text style={{color:"#fff"}}>
                          {trader.stabilityIndex}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
            ))
          }
        </View>
        </ScrollView>

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
