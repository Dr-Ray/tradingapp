import { FlatList, Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import myStylesheet from '../stylesheet'
import Ionicons from 'react-native-vector-icons/Ionicons'

const TopMarket = ({ data }) => {
  const DATA = [
    {
      id: 1,
      name: "Google",
      slug: "google",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 2,
      name: "Amazon",
      slug: "amazon",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 3,
      name: "Apple",
      slug: "apple",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 4,
      name: "Facebook",
      slug: "facebook",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 5,
      name: "Microsoft",
      slug: "microsoft",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 6,
      name: "Venmo",
      slug: "venmo",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 7,
      name: "Tumblr",
      slug: "tumblr",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 8,
      name: "Playstation",
      slug: "playstation",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    },
    {
      id: 9,
      name: "Figma",
      slug: "figma",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    }
  ];
  return (
    <View style={{flex:1, marginTop:30}}>
      {/* <Text style={{ marginBottom: 10, color:"#fff" }}>Top Market</Text> */}
      <View style={{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20, 
        backgroundColor: "#161616",
        height:"100%"
      }}>
        {
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
        }
        {/* <FlatList
        scrollEnabled={false}
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
                  marginBottom:20
                }]}>
              <View style={[myStylesheet.hrRow, { gap: 5, justifyContent:"space-between" }]}>
                <Ionicons name={`logo-${item.slug}`} size={32} color={"#fff"} />
                <View>
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{item.name[0]}{item.name[1]}{item.name[2]}</Text>
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.name}</Text>
                </View>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Text style={{ color: "#fff", fontWeight:"bold", fontSize:15 }}>$ {item.amt}</Text>
                <Text style={{ color: "#0f0", fontWeight:"bold", fontSize:10 }}>+ {item.roI}</Text>
              </View>
            </View>
          )}
        /> */}
      </View>
    </View>
  )
}

export default TopMarket

const styles = StyleSheet.create({});