import { useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");
  const handleRegistration = () => {
    let data = JSON.stringify({
      "fullname": $('#name').val(),
      "currency": $('#currency').val(),
      "referer": $('#referer').val(),
      "email": $('#email').val(),
      "phone": $('#phone').val(),
      "country": $('#country').val().split(":")[0],
      "password": $('#password').val()
  });

  if (data.status == 200) {
    $('#wer').html(`<i class="fa fa-check"></i>`);
    $('#info').html(`<div class="alert alert-success">${data.message}. A verification code has been sent to your email! Click on the link sent to your email to complete verification. Login to continue</div>`);
    $('#info').show();
    document.getElementById("regform").reset();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    // setTimeout(() => {
    //     window.location = 'login.html';
    // },2000);
} else if (data.registered) {
    document.getElementById("regform").reset();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
    $('#wer').html(`Register <i class="fa fa-arrow-right"></i>`);
    $('#info').html(`<div class="alert alert-danger">${data.message}</div>`);
    $('#info').show();
}
else {
    $('#wer').html(`Register <i class="fa fa-arrow-right"></i>`);
    $('#info').html(`<div class="alert alert-danger">${data.message}</div>`);
    $('#error').show();
}
{/* <option>Select Trading Currency</option>
                                    <option value="$">USD</option>
                                    <option value="€">EUR</option>
                                    <option value="£">GBP</option>
                                    <option value="R">South african Rand</option>
                                    <option value="PHP">Philippine Peso</option>
                                    <option value="Rs">PKR</option> */}

  };
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#000" }}>
      <ScrollView>
        <View style={styles.main}>
          <View style={{ padding: 20 }}>
            <Text style={styles.headerText}>Sign Up</Text>
          </View>
          <View style={styles.mainBody}>
            <KeyboardAvoidingView>
              <View style={{ padding: 20 }}>
                <View>
                  <Text style={styles.inputlabel}>First Name</Text>
                  <TextInput
                    placeholder="First Name"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={firstName}
                    style={styles.inputText}
                    onChangeText={value => setFirstName(value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Last Name</Text>
                  <TextInput
                    placeholder="Last Name"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={lastName}
                    style={styles.inputText}
                    onChangeText={value => setLastName(value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Username</Text>
                  <TextInput
                    placeholder="Username"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={username}
                    style={styles.inputText}
                    onChangeText={value => setUsername(value)}
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
                  >
                    <Text style={{ textAlign: "center", color: "#fff" }}>
                      Register
                    </Text>
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
              <Text style={{ textAlign: "center", padding: 20, color: "#fff" }} onPress={() => navigation.navigate("login")}>
                Already have an account? Login
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  gap: 20,
                  justifyContent: "center"
                }}
              >
              </View>
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
  },
  button: {}
});
