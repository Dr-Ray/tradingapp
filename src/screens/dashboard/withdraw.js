import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import myStylesheet from "../../stylesheet";
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import DividerLine from "../../components/dividerLine";
import { AppContext } from "../../../appContext";

const WithdrawScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AppContext);
  const [amount, setAmount] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Bitcoin");
  const [items, setItems] = useState([
    { label: "Bitcoin", value: "Bitcoin" },
    { label: "Ethereum", value: "Ethereum" },
    { label: "USDT", value: "USDT" },
    { label: "Others", value: "Others" }
  ]);

  const processWithdraw = () => {
    if (amount == 0) {
      return;
    }

    if (amount > user.mainBalance) {
      Alert.alert(
        "Error",
        "Insufficient fund",
        [
          {
            text: "Deposit",
            onPress: () => navigation.navigate("deposit"),
            style: "cancel"
          }
        ],
        {
          cancelable: true
        }
      );
      return;
    }
    navigation.navigate("confirm", {
      coin: value,
      amount
    });
  }
  return (
    <SafeAreaView>
      <View style={{ height: "100%", backgroundColor: "#0F0F0F", padding: 20 }}>
        <Text style={{ color: "#fff" }}>Select Payment method</Text>
        <View
          style={[
            myStylesheet.wFull,
            {
              alignItems: "center",
              marginBottom: 20,
              borderRadius: 10,
              marginTop: 30,
              justifyContent: "space-between",
              borderColor: "#fff"
            }
          ]}
        >
          <View>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Change"
              theme="DARK"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", gap: 20 }}>
          <Text style={{ fontSize: 20, color: "#fff" }}>
            Enter Amount in USD
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 40, fontWeight: "bold", color: "#fff" }}>
              $
            </Text>
            <TextInput
              inputMode="numeric"
              value={amount}
              style={{ color: "#fff", fontWeight: "bold", fontSize: 40 }}
              onChangeText={amt => setAmount(amt)}
            />
          </View>
          <View style={{ width: "100%", paddingTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Limit
              </Text>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",

                  paddingTop: 2,
                  paddingBottom: 2,

                  borderRadius: 50
                }}
              >
                $1 - $9,999,999
              </Text>
            </View>
            <DividerLine />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Charges (2%)
              </Text>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",

                  paddingTop: 2,
                  paddingBottom: 2,

                  borderRadius: 50
                }}
              >
                ${amount * 0.02}
              </Text>
            </View>
            <DividerLine />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Receivable
              </Text>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",

                  paddingTop: 2,
                  paddingBottom: 2,

                  borderRadius: 50
                }}
              >
                ${amount - amount * 0.02}
              </Text>
            </View>
            <DividerLine />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                Conversion Rate
              </Text>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",

                  paddingTop: 2,
                  paddingBottom: 2,

                  borderRadius: 50
                }}
              >
                $1.00 = $1.00
              </Text>
            </View>
            <DividerLine />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 20
                }}
              >
                In $:
              </Text>
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",

                  paddingTop: 2,
                  paddingBottom: 2,

                  borderRadius: 50
                }}
              >
                {amount - (amount * 0.02).toFixed(2)}
              </Text>
            </View>
            <DividerLine />
          </View>

          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                width: "40%",
                padding: 15,
                justifyContent: "center",
                borderRadius: 50,
                backgroundColor: "#1659E8"
              }}
              onPress={processWithdraw}
            >
              <Text style={{ textAlign: "center", color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WithdrawScreen;
