import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import { useNavigation } from '@react-navigation/native';

const ViewCrypto = ({route}) => {
    const { symbol } = route.params;
    const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#141414", height:'100%'}}>
        <View style={{ flex:1}}>
        <WebView
          style={{ backgroundColor: "#141414", flex:1}}
          originWhitelist={["*"]}
          source={{
            html: `
                <div class="tradingview-widget-container" style="height:100%;width:100%">
                    <div class="tradingview-widget-container__widget" style="height:calc(100% - 32px);width:100%"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" async>
                    {
                    "autosize": true,
                    "symbol": "${symbol}",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "dark",
                    "style": "1",
                    "locale": "en",
                    "allow_symbol_change": true,
                    "calendar": false,
                    "support_host": "https://www.tradingview.com"
                    }
                    </script>
                </div>
            `
          }}
        />
        </View>
        <View style={{ width: "100%", flexDirection: 'row', gap: 20, justifyContent: "center", marginTop:'auto' }}>
                    <TouchableOpacity style={{ marginBottom: 20, marginTop: 20, width: "45%", height: 43, justifyContent: "center", borderRadius: 100, backgroundColor: "#1659E8" }} onPress={() => navigation.navigate('deposit')}>
                      <Text style={{ textAlign: "center", color: "#fff" }}>Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginBottom: 20, marginTop: 20, width: "45%", height: 43, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }} onPress={() => navigation.navigate('withdraw')}>
                      <Text style={{ textAlign: "center", color: "#fff" }}>Withdraw</Text>
                    </TouchableOpacity>
                  </View>
    </View>
  )
}

export default ViewCrypto

const styles = StyleSheet.create({})