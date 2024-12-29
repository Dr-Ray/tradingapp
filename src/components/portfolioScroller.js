import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import myStylesheet from '../stylesheet'
import Ionicons from 'react-native-vector-icons/Ionicons'
import WebView from 'react-native-webview'

const PortfolioScroller = () => {
  const DATA = [
    {
      id: 1,
      name: "BINANCE:BTCUSD",
      slug: "google",
      roI: "1.03%",
      amt: `$ ${204.01}`,
      pct: "%30"
    },
    {
      id: 2,
      name: "BINANCE:ETHUSD",
      slug: "amazon",
      roI: "1.03%",
      amt: `$ ${204.01}`,
      pct: "%30"
    },
    {
      id: 3,
      name: "FX:GBPUSD",
      slug: "apple",
      roI: "1.03%",
      amt: `${204.01}`,
      pct: "%30"
    }
  ]
  return (
    <View>
      <FlatList
        data={DATA}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              width: 260,
              backgroundColor: "#141414",
              height: 160,
              borderRadius: 10,
              // padding: 10,
              marginRight:10
            }}
          >
            <View style={[myStylesheet.hrRow, myStylesheet.wFull, myStylesheet.justifyBetween, { alignItems: "center", height: "100%" }]}>
              {/* <View>
                <View style={[myStylesheet.hrRow, { gap: 5 }]}>
                  <Ionicons name={`logo-${item.slug}`} size={23} color={"#fff"} />
                  <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>{item.name}</Text>
                </View>
                <Text style={{ color: "#0f0" }}>{item.roI}</Text>
                <Text style={{ color: "#fff" }}>$ {item.amt}</Text>
              </View>
              <View style={{ justifyContent: 'center' }}>
                <Image source={require('../../assets/downn.png')} style={{ width: 100, height: 50, objectFit: 'cover' }} />
                <Text style={{ color: "#fff", textAlign: "center" }}>
                  - {item.amt}, ({item.pct})
                </Text>
              </View> */}
              <WebView
                style={{backgroundColor: "#141414",}}
                originWhitelist={['*']}
                source={{ html: `<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
  {
  "symbol": "${item.name}",
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "dateRange": "12M",
  "colorTheme": "dark",
  "isTransparent": true,
  "autosize": true,
  "largeChartUrl": ""
}
  </script>
</div>` }}
              />
            </View>
          </View>
        )}
      />

      <View></View>
    </View>
  )
}

export default PortfolioScroller

const styles = StyleSheet.create({})