import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopMarket from '../../components/topMarket'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../../../appContext'

const WalletScreen = () => {
  const { user } = useContext(AppContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#090909", height: "100%" }}>
      <StatusBar backgroundColor={'#090909'} color={'#fff'} />
      <ScrollView style={{ height: "100%" }}>
        <View style={{ paddingHorizontal: 20 }}>
          <LinearGradient
            colors={['#9747FE', '#1659E8', '#1659E8']}
            style={{ height: 230, width: "100%", borderRadius: 20, padding: 30,justifyContent:"space-between" }}>
            <View>
            <Text style={{ color:"#fff"}}>Main Balance</Text>
            <Text style={{ fontSize: 30, fontWeight: "bold", color:"#fff" }}>${user.mainBalance}</Text>
            </View>
            <View style={[{flexDirection:"row", gap:20, justifyContent:"flex-start", alignItems: "center" }]}>
              <View>
                <Text style={{ color:"#fff"}}>Deposited</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color:"#fff" }}>${user.deposited}</Text>
              </View>
              <View>
                <Text style={{ color:"#fff"}}>Profit</Text>
                <Text style={{ fontSize: 20, fontWeight: "bold", color:"#fff" }}>${user.profit}</Text>
              </View>
            </View>
          </LinearGradient>

          <View style={{ width: "100%", flexDirection: 'row', gap: 20, justifyContent: "center" }}>
            <TouchableOpacity style={{ marginBottom: 20, marginTop: 20, width: "45%", height: 43, justifyContent: "center", borderRadius: 100, backgroundColor: "#1659E8" }} onPress={() => navigation.navigate('deposit')}>
              <Text style={{ textAlign: "center", color: "#fff" }}>Deposit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginBottom: 20, marginTop: 20, width: "45%", height: 43, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }} onPress={() => navigation.navigate('withdraw')}>
              <Text style={{ textAlign: "center", color: "#fff" }}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, marginBottom: 40 }}>
          <Text>Your Assets</Text>
          <TopMarket />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default WalletScreen

const styles = StyleSheet.create({})