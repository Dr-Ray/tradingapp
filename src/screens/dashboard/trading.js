import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import React from "react";
import TopMarket from "../../components/topMarket";
import { SafeAreaView } from "react-native-safe-area-context";
import myStylesheet from "../../stylesheet";
import Ionicons from "react-native-vector-icons/Ionicons";
import WebView from "react-native-webview";

const TradingScreen = () => {
  const DATA = [
    {
      id: 1,
      name: "All",
      tab: "all",
      icon: "cube"
    },
    {
      id: 2,
      name: "Favorites",
      tab: "favorites",
      icon: "star"
    },
    {
      id: 3,
      name: "Major",
      tab: "major",
      icon: "star"
    }
  ];
  return (
    <SafeAreaView style={{ backgroundColor: "#090909" }}>
      <StatusBar backgroundColor={"#090909"} color={"#fff"} />
      <View style={{ height: "100%" }}>
        <WebView
          style={{ backgroundColor: "#141414" }}
          originWhitelist={["*"]}
          source={{
            html: `
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js" async>
  {
  "symbols": [
    [
      "BINANCE:BTCUSD|1D"
    ],
    [
      "BINANCE:ETHUSD|1D"
    ],
    [
      "BINANCE:BNBUSDT|1D"
    ]
  ],
  "chartOnly": false,
  "width": "100%",
  "height": "100%",
  "locale": "en",
  "colorTheme": "dark",
  "autosize": true,
  "showVolume": false,
  "showMA": false,
  "hideDateRanges": false,
  "hideMarketStatus": false,
  "hideSymbolLogo": false,
  "scalePosition": "right",
  "scaleMode": "Normal",
  "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  "fontSize": "20",
  "noTimeScale": false,
  "valuesTracking": "1",
  "changeMode": "price-and-percent",
  "chartType": "area",
  "maLineColor": "#2962FF",
  "maLineWidth": 1,
  "maLength": 9,
  "headerFontSize": "medium",
  "backgroundColor": "rgba(19, 23, 34, 0)",
  "lineWidth": 2,
  "lineType": 0,
  "dateRanges": [
    "1m|30",
    "3m|60",
    "12m|1D",
    "60m|1W",
    "all|1M"
  ]
}
  </script>
</div>`
          }}
        />

        <ScrollView style={{flex: 1, marginBottom: 10 }}>
          <TopMarket />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TradingScreen;

const styles = StyleSheet.create({});
