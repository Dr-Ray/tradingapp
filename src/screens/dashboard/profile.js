import { View, Text, StatusBar, ScrollView, Modal } from 'react-native'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ProfileDesign from '../../components/profileDesign';
import { AppContext } from '../../../appContext';

const ProfileScreen = () => {
  const { setLoggedIn } = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#090909",height: "100%" }}>
      <StatusBar backgroundColor={'#090909'} color={'#fff'} />
      <ScrollView>
        <View style={{ backgroundColor: "#090909", height: "100%" }}>
          <ProfileDesign />
          <View style={{ flex: 1, }}>
            <View style={{ flex: 1, backgroundColor: "#161616", borderRadius: 20 }}>
              <View style={{
                padding: 20,
                backgroundColor: "#161616",
                borderRadius: 20
              }}>
                <Text style={{ marginBottom: 20, color: "#fff", fontSize: 32 }}>Settings</Text>

                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 80, marginVertical: 10, }} onPress={() => navigation.navigate('profileSettings')}>
                  <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                    <Ionicons name={`person-outline`} size={25} color={"#fff"} />
                    <Text style={{ fontSize: 25, color: "#fff" }}>Profile Settings</Text>
                  </View>
                  <Ionicons name={`chevron-forward-outline`} size={25} color={"#fff"} />
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <View
                    style={[{ backgroundColor: "#1B1B1B", height: 2, width: "93%" }]}
                  />
                </View>
                {/* <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 80, marginVertical: 10, }}>
                  <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                    <Ionicons name={`card-outline`} size={25} color={"#fff"} />
                    <Text style={{ fontSize: 25, color: "#fff" }}>Payment Method</Text>
                  </View>
                  <Ionicons name={`chevron-forward-outline`} size={25} color={"#fff"} />
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <View
                    style={[{ backgroundColor: "#1B1B1B", height: 2, width: "93%" }]}
                  />
                </View> */}
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 80, marginVertical: 10, }} onPress={() => navigation.navigate('security')}>
                  <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                    <Ionicons name={`shield-outline`} size={25} color={"#fff"} />
                    <Text style={{ fontSize: 25, color: "#fff" }}>Security</Text>
                  </View>
                  <Ionicons name={`chevron-forward-outline`} size={25} color={"#fff"} />
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <View
                    style={[{ backgroundColor: "#1B1B1B", height: 2, width: "93%" }]}
                  />
                </View>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 80, marginVertical: 10, }} onPress={() => navigation.navigate('helpandsupport')}>
                  <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                    <Ionicons name={`settings-outline`} size={25} color={"#fff"} />
                    <Text style={{ fontSize: 25, color: "#fff" }}>Help And Support</Text>
                  </View>
                  <Ionicons name={`chevron-forward-outline`} size={25} color={"#fff"} />
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <View
                    style={[{ backgroundColor: "#1B1B1B", height: 2, width: "93%" }]}
                  />
                </View>
                <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 80, marginVertical: 10, }} onPress={() => setModalVisible(true)}>
                  <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
                    <Ionicons name={`exit-outline`} size={25} color={"#fff"} />
                    <Text style={{ fontSize: 25, color: "#fff" }}>Logout</Text>
                  </View>
                  <Ionicons name={`chevron-forward-outline`} size={25} color={"#fff"} />
                </TouchableOpacity>
                <View style={{ width: "100%", alignItems: "center" }}>
                  <View
                    style={[{ backgroundColor: "#1B1B1B", height: 2, width: "93%" }]}
                  />
                </View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  style={{backgroundColor:"#0F0F0F"}}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={{ position: "absolute", bottom: 0, justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <View style={{ backgroundColor: "#0F0F0F", width: "95%",gap:10,  borderRadius: 20, padding: 20 }}>
                      <Text style={{ textAlign: "center", color: "#fff" }}>Log Out</Text>
                      <Text style={{ textAlign: "center", color: "#fff" }}>Are you sure you want to leave</Text>
                      <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 60, justifyContent: "center", borderRadius: 100, backgroundColor: "#00f" }} onPress={() => setLoggedIn(false)}>
                        <Text style={{ textAlign: "center", color: "#fff" }}>Log Out</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 60, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ textAlign: "center", color: "#fff" }}>Cancel</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen