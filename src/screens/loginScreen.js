import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { ActivityIndicator, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppContext } from '../../appContext';

export default function LoginScreen() {
    const navigation = useNavigation();
    const { setLoggedIn, setUser } = useContext(AppContext);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async () => {
        setErr(false);
        setLoading(true);
        try {
        const resp = await fetch('https://stocksfxpro.com/api/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email,
              password
            })
          });
          
          const response = await resp.json();
          if(response.status === 400) {
            setErr(true);
            setLoading(false);
            return;
          }else{
            setUser(response.user);
            setTimeout(() => {
                setLoggedIn(true);
            }, 2000);
          }
        } catch (err) {
            Alert.alert("Network error please try again");
            setLoading(false);
        }
        
        // navigation.navigate(screen);
        return;
    }
    const onPressed = (screen) => {
        if (screen !== '') navigation.navigate(screen);
        return;
    }
    return (
        <SafeAreaView style={{backgroundColor: "#0F0F0F", height: "100%"}}>
            <ScrollView>
                <View style={styles.main}>
                    <View style={{ padding: 20 }}>
                        <Text style={styles.headerText}>Login</Text>
                    </View>
                    <View style={styles.mainBody}>
                        <KeyboardAvoidingView>
                            <View style={{ padding: 20 }}>
                                {
                                    err&&(
                                        <View style={{backgroundColor:"#F31B2DFF", padding:15, borderRadius:10, marginBottom:20}}>
                                            <Text style={{textAlign:"center", color:"#fff"}}>Invalid login credentials</Text>
                                        </View>
                                    )
                                }
                                <View>
                                    <Text style={styles.inputlabel}>Email</Text>
                                    <TextInput
                                        placeholder='Email'
                                        inputMode='email'
                                        placeholderTextColor="#fff"
                                        value={email}
                                        onChangeText={text => setEmail(text)}
                                        style={styles.inputText}
                                    />
                                </View>
                                <View>
                                    <Text style={styles.inputlabel}>Password</Text>
                                    <TextInput
                                        placeholder='Password'
                                        secureTextEntry
                                        placeholderTextColor="#fff"
                                        value={password}
                                        style={styles.inputText}
                                        onChangeText={text => setPassword(text)}
                                    />
                                </View>
                                <View style={{ width: "100%", alignItems: "center" }}>
                                    <TouchableOpacity style={{ marginTop: 20, width: "100%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#1659E8" }} onPress={handleLogin}>
                                        {
                                            loading?<ActivityIndicator color={"#fff"} />:<Text style={{ textAlign: "center", color: "#fff" }}>Login</Text>
                                        }
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                        <View style={{ padding: 20 }}>
                            {/* <View>
                                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Continue with Apple</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Continue with Google</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginBottom: 6, marginTop: 6, width: "100%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Continue with Facebook</Text>
                                </TouchableOpacity>
                            </View> */}
                            <Text style={{ textAlign: "center", padding: 20, color: "#fff" }}  onPress={() => navigation.navigate('register')}>Don't have an account? Register</Text>
                            {/* <View style={{ width: "100%", flexDirection: 'row', gap: 20, justifyContent: "center" }}>
                                <TouchableOpacity style={{ marginBottom: 20, marginTop: 20, width: "40%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#00f" }} onPress={() => navigation.navigate('register')}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Register</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ marginBottom: 20, marginTop: 20, width: "40%", height: 50, justifyContent: "center", borderRadius: 100, backgroundColor: "#252525" }}>
                                    <Text style={{ textAlign: "center", color: "#fff" }}>Cancel</Text>
                                </TouchableOpacity>
                            </View> */}
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