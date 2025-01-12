import { ActivityIndicator, FlatList, Image, Platform, RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import myStylesheet from '../stylesheet'
// import Ionicons from 'react-native-vector-icons/Ionicons'

const TopMarket = ({ user, setUser }) => {
  const [DATA, setDATA] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    useEffect(() => {
      const getCoins = async () => {
          const resp = await fetch('https://api.coincap.io/v2/assets', {
              method: "GET"
          });
          const response = await resp.json();
          setDATA(response.data);
      }
      getCoins();
  }, []);

  const onRefresh = useCallback(() => {
      setRefreshing(true);
      fetch('https://stocksfxpro.com/api/user/me', {
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
          setUser(response);
          setRefreshing(false);
        })
        .catch(err => Alert.alert("Error.... "+ err.message));
    }, []);

  return (
    <View style={{flex:1, marginTop:10}}>
      {/* <Text style={{ marginBottom: 10, color:"#fff" }}>Top Market</Text> */}
      <View style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        backgroundColor: "#161616",
        height:"100%"
      }}>
        {/* {
          (DATA.length > 0) ? (
          DATA?.map((item, idx) => (
            <View key={idx}>
              <View
              style={[myStylesheet.hrRow, myStylesheet.wFull, myStylesheet.justifyBetween,
              {
                paddingLeft: 20,
                paddingRight: 20,
                paddingTop: 20,
                alignItems: "center",
                height: 60,
                marginBottom: 20
              }]}>
              <View style={[myStylesheet.hrRow, { gap: 5, justifyContent: "space-between" }]}>
                <Ionicons name={`logo-${item.slug}`} size={32} color={"#fff"} />
                <View>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{item.name[0]}{item.name[1]}{item.name[2]}</Text>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.name}</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>$ {item.amt}</Text>
                <Text style={{ color: "#0f0", fontWeight: "bold", fontSize: 10 }}>+ {item.roI}</Text>
              </View>
            </View><View style={{ width: "100%", alignItems: "center" }}>
                <View
                  style={[{ backgroundColor: "#1B1B1B", height: 2, width: "93%" }]} />
              </View>
            </View>
          ))
        ) : (
          <View>
            <ActivityIndicator size={32}/>
          </View>
        )
        } */}
        {
          (DATA.length > 0) ? (
            <FlatList
            nestedScrollEnabled={true}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
              ItemSeparatorComponent={
                (() => (
                  <View style={{ width:"100%", alignItems:"center"}}>
                    <View
                      style={[{backgroundColor:"#1B1B1B", height:2, width:"93%"}]}
                    />
                  </View>
                ))
              }
              data={DATA}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View
                  style={
                    [myStylesheet.hrRow, myStylesheet.wFull, myStylesheet.justifyBetween,
                    {
                      paddingLeft: 20,
                      paddingRight: 20,
                      paddingTop:20,
                      alignItems: "center",
                      height:60,
                      marginBottom:20,
                    }]}>
                  <View style={[myStylesheet.hrRow, { gap: 5, justifyContent:"space-between" }]}>
                    {/* <Ionicons name={`logo-${item.slug}`} size={32} color={"#fff"} /> */}
                    <View>
                      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{item.symbol}</Text>
                      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 10  }}>{item.name}</Text>
                    </View>
                  </View>
                  <View style={{ justifyContent: 'center', alignItems:"flex-end" }}>
                    <Text style={{ color: "#fff", fontWeight:"bold", fontSize:15 }}>$ {Number(item.priceUsd).toFixed(2)}</Text>
                    {
                      (item.changePercent24Hr[0] === '-')?(
                        <Text style={{ color: "#f00", fontWeight:"bold", fontSize:10 }}>{Number(item.changePercent24Hr).toFixed(2)}%</Text>
                      ):(
                        <Text style={{ color: "#0f0", fontWeight:"bold", fontSize:10 }}>+{Number(item.changePercent24Hr).toFixed(2)}%</Text>
                      )
                    }
                  </View>
                </View>
              )}
            />
          ) : (
            <View>
              <ActivityIndicator size={32}/>
            </View>
          )
        }
       
      </View>
    </View>
  )
}

export default TopMarket

const styles = StyleSheet.create({});