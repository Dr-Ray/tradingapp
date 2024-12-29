import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import Ionicons from "react-native-vector-icons/Ionicons";
import QrCodeGen from "../../components/Qrcode";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import LoadingWidget from "../../components/loadingWidget";

const DepositType = ({ route }) => {
  const navigation = useNavigation();
  const { coin, amount } = route.params;
  const [walletAddress, setWalletAddress] = useState(
    "rJ43scnlweywgeywbrw4938h34r8wg4e4"
  );
  const [openQRcode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  //   useEffect(() => {
  //     async function getWalletAddress(coin) {
  //       setLoading(true);
  //       try {
  //         const url = "https://stocksfxpro.com/api/user/wallet/address";
  //         const resp = await fetch(url, {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify({
  //             wallet: coin
  //           })
  //         });

  //         const response = await resp.json();
  //         if (response.status === 400) {
  //           setErr(true);
  //           setLoading(false);
  //           return;
  //         } else {
  //           setLoading(false);
  //           setWalletAddress(response.address);
  //           setOpenQRcode(true)
  //         }
  //       } catch (err) {
  //         setErr(true);
  //         Alert.alert("Network error please try again");
  //         setLoading(false);
  //       }
  //     }
  //     getWalletAddress(coin);
  //   }, []);
  //
  const handleDepositFunding = async () => {
    setLoading(true);
    try {
      const resp = await fetch(
        "https://stocksfxpro.com/api/user/deposits/fund/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userid: user.userid,
            payment_mode: coin,
            amount
          })
        }
      );

      const response = await resp.json();
      if (response.status === 400) {
        setLoading(false);
        return;
      } else {
        setLoading(false);
        navigation.navigate("successError", {
          status: "success",
          message:
            "Deposit initiated successfully Account will be funded on payment confirmation please wait while we confirm your transaction"
        });
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(walletAddress);
  };

  if (loading) {
    return <LoadingWidget />;
  } else {
    return (
      <SafeAreaView style={{ backgroundColor: "#090909", height: "100%" }}>
        <ScrollView style={{ padding: 10, height: "100%" }}>
          {/* QRCode */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <QrCodeGen qrValue={walletAddress} />
          </View>
          {openQRcode &&
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <QrCodeGen qrValue={walletAddress} />
            </View>}
          {/* Wallet Address */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 10,
              marginTop: 40,
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#fff" }}>Wallet Address</Text>
            <Ionicons name="chevron-forward-outline" color={"#fff"} size={20} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingRight: 30,
              borderRadius: 5,
              alignItems: "center",
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: "#141414"
            }}
          >
            <TextInput
              readOnly
              style={{
                borderRadius: 5,
                backgroundColor: "#141414",
                color: "#fff",
                paddingLeft: 10,
                width: "100%"
              }}
              placeholder={walletAddress}
              placeholderTextColor={"#fff"}
              value={walletAddress}
            />
            <Ionicons
              name="copy-outline"
              color={"#fff"}
              size={20}
              onPress={copyToClipboard}
            />
          </View>
          {/* Coin Network */}
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 10,
              marginTop: 40,
              alignItems: "center"
            }}
          >
            <Text style={{ color: "#fff" }}>Network</Text>
            <Ionicons name="git-network-outline" color={"#fff"} size={20} />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingRight: 30,
              borderRadius: 5,
              alignItems: "center",
              marginTop: 10,
              marginBottom: 20,
              backgroundColor: "#141414"
            }}
          >
            <TextInput
              readOnly
              style={{
                borderRadius: 5,
                backgroundColor: "#141414",
                color: "#fff",
                paddingLeft: 10,
                width: "100%"
              }}
              placeholder={coin}
              placeholderTextColor={"#fff"}
              value={coin}
            />
            <Ionicons name="copy-outline" color={"#fff"} size={20} />
          </View>
          {/* Deposit Details */}
          <View
            style={{
              gap: 15,
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#fff" }}>Amount</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
                ${amount}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#fff" }}>Currency</Text>
              <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
                {coin}
              </Text>
            </View>
          </View>
          {/* Notice */}
          <View style={{ gap: 20, marginTop: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Note:</Text>
            <Text style={{ color: "#fff" }}>
              Please make sure that only {coin} is made via this address.
              Otherwise, your deposited funds will not ne added to your
              available balance - nor will it be refunded
            </Text>
          </View>
          {/* Continue */}
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "auto",
              height: 80,
              marginBottom: 20
            }}
          >
            {err
              ? <TouchableOpacity
                  style={{
                    marginTop: 20,
                    width: "50%",
                    padding: 15,
                    justifyContent: "center",
                    borderRadius: 50,
                    backgroundColor: "#1659E8"
                  }}
                  onPress={() => navigation.goBack()}
                >
                  <Text style={{ textAlign: "center", color: "#fff" }}>
                    An unexpected error occured please try agiain (Go back )
                  </Text>
                </TouchableOpacity>
              : <TouchableOpacity
                  style={{
                    marginTop: 20,
                    width: "50%",
                    padding: 15,
                    justifyContent: "center",
                    borderRadius: 20,
                    backgroundColor: "#1659E8"
                  }}
                  onPress={handleDepositFunding}
                >
                  <Text style={{ textAlign: "center", color: "#fff" }}>
                    Submit
                  </Text>
                </TouchableOpacity>}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default DepositType;

const styles = StyleSheet.create({});
