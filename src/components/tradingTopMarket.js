import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import myStylesheet from '../stylesheet'
import { useNavigation } from '@react-navigation/native';
// import Ionicons from 'react-native-vector-icons/Ionicons'

const TradingTopMarket = ({setCoinViewed}) => {
  const [DATA, setDATA] = useState([]);
  const navigation = useNavigation();
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
  return (
    <View style={{flex:1, marginTop:10}}>
      <View style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        backgroundColor: "#161616",
        height:"100%"
      }}>
        
        {
          (DATA.length > 0) ? (
            <FlatList
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
                <TouchableOpacity
                onPress={() => setCoinViewed(`COINBASE:${item.symbol}USD`)}
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
                </TouchableOpacity>
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

export default TradingTopMarket

const styles = StyleSheet.create({});