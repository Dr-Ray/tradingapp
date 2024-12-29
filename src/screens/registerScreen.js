import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Choose");
  const [currency, setCurrency] = useState([
    { label: "Choose", value: " $" },
    { label: "USD", value: "$" },
    { label: "EUR", value: "€" },
    { label: "GBP", value: "£" },
    { label: "South african Rand", value: "R" }
  ]);
  const handleRegistration = async () => {
    setLoading(true);
    let data = {
      country,
      email,
      fullname: fullName,
      password,
      phone: phoneNumber
    };
    try {
      const resp = await fetch("https://stocksfxpro.com/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const response = await resp.json();
      if (response.status === 400) {
        setLoading(false);
        return;
      } else {
        setLoading(false);
        navigation.navigate("login");
        Alert.alert("Success", "Account updated successfully");
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#000" }}>
      <ScrollView nestedScrollEnabled={true} horizontal={false}>
        <View style={styles.main}>
          <View style={{ padding: 20 }}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>
          <View style={styles.mainBody}>
            <KeyboardAvoidingView>
              <View style={{ padding: 20 }}>
                <View>
                  <Text style={styles.inputlabel}>Your Name</Text>
                  <TextInput
                    placeholder="Full Name"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={fullName}
                    style={styles.inputText}
                    onChangeText={value => setFullName(value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Email</Text>
                  <TextInput
                    placeholder="Email"
                    inputMode="email"
                    placeholderTextColor="#fff"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    style={styles.inputText}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Country</Text>
                  <TextInput
                    placeholder="Country"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={country}
                    style={styles.inputText}
                    onChangeText={value => setCountry(value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Phone Number</Text>
                  <TextInput
                    placeholder="Phone Number"
                    inputMode="numeric"
                    placeholderTextColor="#fff"
                    value={phoneNumber}
                    style={styles.inputText}
                    onChangeText={value => setPhoneNumber(value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Select Currency</Text>
                  <DropDownPicker
                    open={open}
                    value={value}
                    listMode="SCROLLVIEW"
                    items={currency}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setCurrency}
                    placeholder="Select Trading Currency"
                    theme="DARK"
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      height: 60,
                      marginBottom: 10
                    }}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Password</Text>
                  <TextInput
                    placeholder="Password"
                    secureTextEntry
                    placeholderTextColor="#fff"
                    value={password}
                    style={styles.inputText}
                    onChangeText={value => setPassword(value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Confirm Password</Text>
                  <TextInput
                    placeholder="Confirm Password"
                    secureTextEntry
                    placeholderTextColor="#fff"
                    value={confirmPasssword}
                    style={styles.inputText}
                    onChangeText={value => setConfirmPassword(value)}
                  />
                </View>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <TouchableOpacity
                    style={{
                      marginTop: 20,
                      width: "100%",
                      height: 50,
                      justifyContent: "center",
                      borderRadius: 100,
                      backgroundColor: "#1659E8"
                    }}
                    onPress={handleRegistration}
                  >
                    {loading
                      ? <ActivityIndicator color={"#fff"} />
                      : <Text style={{ textAlign: "center", color: "#fff" }}>
                          Register
                        </Text>}
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAvoidingView>
            <View style={{ padding: 20 }}>
              {/* <View>
                <TouchableOpacity
                  style={{
                    marginBottom: 6,
                    marginTop: 6,
                    width: "100%",
                    height: 50,
                    borderRadius: 100,
                    flexDirection:"row",
                    justifyContent:"center",
                    backgroundColor: "#1659E8"
                  }}
                >
                  <View style={{flexDirection:"row",alignItems:"center", gap:6 }}>
                    <Ionicons name={`logo-facebook`} size={32} color={"#fff"} />
                    <Text style={{ color: "#fff" }}>
                      Continue with Facebook
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginBottom: 6,
                    marginTop: 6,
                    width: "100%",
                    height: 50,
                    borderRadius: 100,
                    flexDirection:"row",
                    justifyContent:"center",
                    backgroundColor: "#1659E8"
                  }}
                >
                  <View style={{flexDirection:"row",alignItems:"center", gap:6 }}>
                    <Ionicons name={`logo-facebook`} size={32} color={"#fff"} />
                    <Text style={{ color: "#fff" }}>
                      Continue with Facebook
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    marginBottom: 6,
                    marginTop: 6,
                    width: "100%",
                    height: 50,
                    borderRadius: 100,
                    flexDirection:"row",
                    justifyContent:"center",
                    backgroundColor: "#1659E8"
                  }}
                >
                  <View style={{flexDirection:"row",alignItems:"center", gap:6 }}>
                    <Ionicons name={`logo-facebook`} size={32} color={"#fff"} />
                    <Text style={{ color: "#fff" }}>
                      Continue with Facebook
                    </Text>
                  </View>
                </TouchableOpacity>
              </View> */}
              <Text
                style={{ textAlign: "center", padding: 20, color: "#fff" }}
                onPress={() => navigation.navigate("login")}
              >
                Already have an account? Login
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  gap: 20,
                  justifyContent: "center"
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    justifyContent: "space-between"
  },
  mainBody: {},
  headerText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    color: "#fff"
  },
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
    height: 60,
    borderRadius: 10,
    color: "#fff",
    marginBottom: 10
  }
});
