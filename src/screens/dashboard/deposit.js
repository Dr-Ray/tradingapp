import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import myStylesheet from '../../stylesheet';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const DepositScreen = () => {
  const navigation = useNavigation();
    const [amount, setAmount] = useState(0);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Bitcoin');
    const [items, setItems] = useState([
      { label: 'Bitcoin', value: 'Bitcoin'},
      { label: 'Ethereum', value: 'Ethereum'},
      { label: 'USDT', value: 'USDT'}
    ]);
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "#0F0F0F", padding: 20}}>
        <Text style={{color:"#fff"}}>Select Payment method</Text>
        <View
          style={
            [myStylesheet.wFull,
            {
              alignItems: "center",
              marginBottom: 20,
              borderRadius: 10,
              marginTop:30 ,
              justifyContent:"space-between",
              borderColor: "#fff"
            }]}>
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder='Change'
              theme="DARK"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", gap: 20 }}>
          <Text style={{ fontSize: 20, color: "#fff" }}>Enter Amount in USD</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>$</Text>
            <TextInput inputMode='numeric' value={amount} style={{ color: "#fff", fontWeight: "bold", fontSize: 40 }} onChangeText={amt => setAmount(amt)} />
          </View>
          <Text style={{ fontSize: 10, color: "#fff" }}>Min $100 - Max $10000</Text>

          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity style={{ marginTop: 20, width: "40%", padding:15, justifyContent: "center", borderRadius: 50, backgroundColor: "#1659E8" }} onPress={() => {
              if(amount == 0) {
                return;
              }
              navigation.navigate("depositType", {
                coin: value,
                amount,
              })
            }}>
              <Text style={{ textAlign: "center", color: "#fff" }}>Deposit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default DepositScreen

const styles = StyleSheet.create({})