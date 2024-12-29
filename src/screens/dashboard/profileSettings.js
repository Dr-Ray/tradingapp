import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import ProfileDesign from "../../components/profileDesign";
import { AppContext } from "../../../appContext";

const ProfileSettings = () => {
  const { user, setUser } = useContext(AppContext);
  const [dob, setDob] = useState();
  const [address, setAddress] = useState(user.address);
  const [fullName, setFullName] = useState(user.fullname);
  const [country, setCountry] = useState(user.country);
  const [phone, setPhoneNumber] = useState(user.phone);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://stocksfxpro.com/api/user/me", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userid: user.userid
      })
    })
      .then(resp => resp.json())
      .then(response => {
        setUser(response);
      })
      .catch(err => Alert.alert("Error.... " + err.message));
  }, []);

  const handleProfileUpdate = async () => {
    setLoading(true);
    let data = {
      userid: user.userid,
      address,
      country,
      dob,
      fullName,
      phone
    };
    try {
      const resp = await fetch(
        "https://stocksfxpro.com/api/user/account/update/address",
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
        return;
      } else {
        setLoading(false);
        Alert.alert("Success", "Account updated successfully");
      }
    } catch (err) {
      Alert.alert("Network error please try again");
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#0F0F0F", height: "100%" }}>
      <ScrollView>
        <View style={styles.main}>
          <ProfileDesign />
          <View style={styles.mainBody}>
            <KeyboardAvoidingView>
              <View style={{ padding: 20 }}>
                <View>
                  <Text style={styles.inputlabel}>Full Name</Text>
                  <TextInput
                    placeholder="Full Name"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={fullName}
                    style={styles.inputText}
                    onChange={e => setFullName(e.currentTarget.value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Date of Birth</Text>
                  <TextInput
                    placeholder="DOB"
                    inputMode="text"
                    placeholderTextColor="#fff"
                    value={dob}
                    style={styles.inputText}
                    onChange={e => setDob(e.currentTarget.value)}
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
                    onChange={e => setCountry(e.currentTarget.value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Phone Number</Text>
                  <TextInput
                    placeholder="Phone Number"
                    inputMode="numeric"
                    placeholderTextColor="#fff"
                    value={phone}
                    style={styles.inputText}
                    onChange={e => setPhoneNumber(e.currentTarget.value)}
                  />
                </View>
                <View>
                  <Text style={styles.inputlabel}>Address</Text>
                  <TextInput
                    placeholder="Type your address here..."
                    placeholderTextColor="#fff"
                    value={address}
                    multiline={true}
                    style={[
                      styles.inputText,
                      { height: 120, textAlignVertical: "top" }
                    ]}
                    onChange={e => setAddress(e.currentTarget.value)}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    marginBottom: 6,
                    marginTop: 6,
                    width: "100%",
                    padding: 15,
                    justifyContent: "center",
                    borderRadius: 100,
                    backgroundColor: "#252525"
                  }}
                  onPress={handleProfileUpdate}
                >
                  {loading
                    ? <ActivityIndicator color={"#fff"} />
                    : <Text style={{ textAlign: "center", color: "#fff" }}>
                        Save
                      </Text>}
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileSettings;
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
