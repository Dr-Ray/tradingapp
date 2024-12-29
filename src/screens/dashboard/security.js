import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProfileDesign from '../../components/profileDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

const SecurityScreen = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasssword, setConfirmPassword] = useState('');
    return (
        <SafeAreaView style={{ backgroundColor: "#0F0F0F", height:"100%" }}>
            <ScrollView>
                <View style={styles.main}>
                    <ProfileDesign />
                    <View style={styles.mainBody}>
                        <KeyboardAvoidingView>
                            <View style={{ padding: 20 }}>
                                <View>
                                    <Text style={styles.inputlabel}>Old Password</Text>
                                    <TextInput
                                        placeholder='Old Password'
                                        secureTextEntry
                                        placeholderTextColor="#fff"
                                        value={oldPassword}
                                        style={styles.inputText}
                                        onChange={(e) => setOldPassword(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>New Password</Text>
                                    <TextInput
                                        placeholder='New Password'
                                        secureTextEntry
                                        placeholderTextColor="#fff"
                                        value={password}
                                        style={styles.inputText}
                                        onChange={(e) => setPassword(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Confirm Password</Text>
                                    <TextInput
                                        placeholder='Confirm Password'
                                        secureTextEntry
                                        placeholderTextColor="#fff"
                                        value={confirmPasssword}
                                        style={styles.inputText}
                                        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                                    />
                                </View>
                                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", padding:15, justifyContent: "center", borderRadius: 100, backgroundColor: "#00f" }}>
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

export default SecurityScreen

const styles = StyleSheet.create({
    main: {
        height: "100%",
        backgroundColor: "#000",
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