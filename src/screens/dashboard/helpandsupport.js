import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProfileDesign from '../../components/profileDesign';
import { SafeAreaView } from 'react-native-safe-area-context';

const HelpAndSupport = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return (
        <SafeAreaView style={{ backgroundColor: "#0F0F0F", height:"100%" }}>
            <ScrollView>
                <ProfileDesign />
                <View style={styles.main}>
                    <View style={styles.mainBody}>
                        <KeyboardAvoidingView>
                            <View style={{ padding: 20 }}>
                                <View>
                                    <Text style={styles.inputlabel}>Email</Text>
                                    <TextInput
                                        placeholder='Your Email'
                                        inputMode='email'
                                        placeholderTextColor="#fff"
                                        value={email}
                                        style={styles.inputText}
                                        onChange={(e) => setEmail(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Subject</Text>
                                    <TextInput
                                        placeholder='Subject'
                                        secureTextEntry
                                        placeholderTextColor="#fff"
                                        value={subject}
                                        style={styles.inputText}
                                        onChange={(e) => setSubject(e.currentTarget.value)}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Message</Text>
                                    <TextInput
                                        placeholder='Type your message here...'
                                        placeholderTextColor="#fff"
                                        value={message}
                                        multiline={true}
                                        style={[styles.inputText, {height:120, textAlignVertical: 'top'}]}
                                        onChange={(e) => setMessage(e.currentTarget.value)}
                                    />
                                </View>
                                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#00f" }}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Send</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HelpAndSupport

const styles = StyleSheet.create({
    main: {
        height: "100%",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginHorizontal: 20,
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
        height: 50,
        borderRadius: 10,
        color: "#fff",
        marginBottom: 10
    },
    button: {

    }
});