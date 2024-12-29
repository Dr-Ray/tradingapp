import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    const onPressed = (screen) => {
        navigation.navigate(screen);
    }
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={"#0A0A0A"} />
            <View style={styles.body}>
                <View style={{ width: 300, justifyContent: "center" }}>
                    <Text style={styles.textHeader}>Join the Trading Community, Start Investing Today</Text>
                </View>
                <View style={styles.main}>
                    <Button text={"Login"} bgColor={"#0575FD"} textColor={"#fff"} btnPressed={onPressed} screen={'login'} icon="arrow-forward"/>
                    <Button text={"Sign up"} bgColor={"#12B76A"} textColor={"#fff"} btnPressed={onPressed} screen={'register'} icon="person-add-outline"/>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#0F0F0F",
        height: "100%",
        padding: 40
    },
    textHeader: {
        color: "#fff",
        fontSize: 36
    },
    main: {
        gap: "1.5rem",
        marginTop: "auto"
    }
});