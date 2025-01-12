import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../../../appContext";

const ConfirmWithdrawal = ({ route }) => {
  const navigation = useNavigation();
  const { user } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const { coin, amount } = route.params;
  const [message, setMessage] = useState("");
  const handleWithdraw = async () => {
    setLoading(true);
    let data = {
      userid: user.userid,
      details: message,
      method: coin,
      type: "Withdrawal",
      username: user.fullname,
      amount
    };
    try {
      const resp = await fetch(
        "https://stocksfxpro.com/api/user/withdraw/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      const response = await resp.json();
      if (response.status === 400) {
        setLoading(false);
        navigation.goBack();
        return;
      } else {
        setLoading(false);
        navigation.navigate("successError", {
          status: "success",
          message:
            "Withdrawal initiated successfully Account will be funded accordingly please wait while we process your transaction"
        });
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#0F0F0F", height: "100%" }}>
      <StatusBar backgroundColor={"#090909"} color={"#fff"} />
      <View style={{ padding: 10, gap: 30 }}>
        <Text style={{ color: "#fff" }}>
          Provide the below information and re-check the information before
          submitting.
        </Text>
        <Text style={{ color: "#fff" }}>
          See that you double check that the information provided is correct,
          otherwise the authority will not be responsible for any economic loss
        </Text>
        <Text style={{ color: "#fff" }}>
          The process make take some time. Please be patient
        </Text>
        <KeyboardAvoidingView>
          <View style={{ padding: 20 }}>
            <View>
              <Text style={styles.inputlabel}>
                {" "}Kindly input your payment information below!
              </Text>
              <TextInput
                placeholder={`Please enter your ${coin} address / withdrawal information here`}
                placeholderTextColor="#fff"
                value={message}
                multiline={true}
                style={styles.inputText}
                onChangeText={text => setMessage(text)}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
              {loading
                ? <ActivityIndicator color={"#fff"} />
                : <Text style={{ textAlign: "center", color: "#fff" }}>
                    Send
                  </Text>}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default ConfirmWithdrawal;

const styles = StyleSheet.create({
  inputlabel: {
    fontWeight: "200",
    marginBottom: 20,
    color: "#fff"
  },
  inputText: {
    borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: "#252525",
    width: "100%",
    height: 50,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 10,
    height: 120,
    textAlignVertical: "top"
  },
  button: {
    marginBottom: 6,
    marginTop: 6,
    width: "100%",
    height: 50,
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#00f"
  }
});
