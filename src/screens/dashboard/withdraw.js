import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import myStylesheet from '../../stylesheet'
import DropDownPicker from 'react-native-dropdown-picker'
import { SafeAreaView } from 'react-native-safe-area-context'

const WithdrawScreen = () => {
  const [myBal, setMyBal] = useState(0);
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Paypal');
  const [items, setItems] = useState([
    { label: 'Paypal', value: 'Paypal' },
    { label: 'Crypto', value: 'Crypto' },
    { label: 'Bitcoin', value: 'Bitcoin', parent: "Crypto" },
    { label: 'Ethereum', value: 'Ethereum', parent: "Crypto" },
    { label: 'Bank', value: 'Bank', },
    { label: 'Others', value: 'Others' }
  ]);
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "#0F0F0F", padding: 20}}>
        <View
          style={
            [myStylesheet.hrRow, myStylesheet.wFull, myStylesheet.justifyEven,
            {
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "#333",
              alignItems: "center",
              height: 150,
              marginBottom: 20,
              borderWidth: 2,
              borderRadius: 10,
              marginTop:30 ,
              borderColor: "#fff"
            }]}>
          <View style={[myStylesheet.hrRow, { gap: 10 }]}>
            <Ionicons name={`logo-octocat`} size={32} color={"#fff"} />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>Paypal</Text>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder='Change'
              theme="DARK"
              style={{ width: 130, backgroundColor: "#0F0F0F", borderRadius: 10 }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", gap: 20 }}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Enter Amount in USD</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>$</Text>
            <TextInput inputMode='numeric' value={amount} style={{ color: "#fff", fontWeight: "bold", fontSize: 40 }} onChangeText={amt => setAmount(amt)} />
          </View>
          <Text style={{ fontSize: 20, color: "#fff" }}>Min $100 - Max $10000</Text>
          <Text style={{ fontSize: 20, color: "#fff" }}>Current Balance: {myBal}</Text>
          <View style={{ width: "100%", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 20 }}>
            <TouchableOpacity style={{ marginTop: 20, width: "25%", height: 40, justifyContent: "center", borderRadius: 50, backgroundColor: "#1659E8" }} onPress={() => setAmount(100)}>
              <Text style={{ textAlign: "center", color: "#fff" }}>$100</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, width: "25%", height: 40, justifyContent: "center", borderRadius: 50, backgroundColor: "#1659E8" }} onPress={() => setAmount(500)}>
              <Text style={{ textAlign: "center", color: "#fff" }}>$500</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, width: "25%", height: 40, justifyContent: "center", borderRadius: 50, backgroundColor: "#1659E8" }} onPress={() => setAmount(5000)}>
              <Text style={{ textAlign: "center", color: "#fff" }}>$5000</Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity style={{ marginTop: 20, width: "40%", height: 60, justifyContent: "center", borderRadius: 50, backgroundColor: "#1659E8" }}>
              <Text style={{ textAlign: "center", color: "#fff" }}>Withdraw</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default WithdrawScreen

const styles = StyleSheet.create({}) 