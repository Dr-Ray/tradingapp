import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProfileDesign from '../../components/profileDesign';

const ProfileSettings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    return (
        <SafeAreaView style={{ backgroundColor: "#0F0F0F", height:"100%" }}>
            <ScrollView>
                <View style={styles.main}>
                    {/* <View style={{ padding: 20 }}>
                        <Text style={styles.headerText}>Profile Settings</Text>
                    </View> */}
                    <ProfileDesign />
                    <View style={styles.mainBody}>
                        <KeyboardAvoidingView>
                            <View style={{ padding: 20 }}>
                                <View>
                                    <Text style={styles.inputlabel}>First Name</Text>
                                    <TextInput
                                        placeholder='First Name'
                                        inputMode='text'
                                        placeholderTextColor="#fff"
                                        value={firstName}
                                        style={styles.inputText}
                                        onChange={(e) => setFirstName(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Last Name</Text>
                                    <TextInput
                                        placeholder='Last Name'
                                        inputMode='text'
                                        placeholderTextColor="#fff"
                                        value={lastName}
                                        style={styles.inputText}
                                        onChange={(e) => setLastName(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Username</Text>
                                    <TextInput
                                        placeholder='Username'
                                        inputMode='text'
                                        placeholderTextColor="#fff"
                                        value={username}
                                        style={styles.inputText}
                                        onChange={(e) => setUsername(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Email</Text>
                                    <TextInput
                                        placeholder='Email'
                                        inputMode='email'
                                        placeholderTextColor="#fff"
                                        value={email}
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                        style={styles.inputText}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Phone Number</Text>
                                    <TextInput
                                        placeholder='Phone Number'
                                        inputMode='numeric'
                                        placeholderTextColor="#fff"
                                        value={phoneNumber}
                                        style={styles.inputText}
                                        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                                    />
                                </View>
                                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", padding:15, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Save</Text>
                                </TouchableOpacity>                 
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileSettings

const styles = StyleSheet.create({
    main: {
        height: "100%",
        justifyContent: "space-between"
    },
    mainBody: {

    },
    headerText: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
        color: "#fff"
    },
    inputlabel: {
        fontWeight: '200',
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
    button: {

    }
});