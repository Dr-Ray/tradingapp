import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import Button from '../components/button';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, ResizeMode } from 'expo-av';
import { useRef } from 'react';

export default function WelcomeScreen() {
    const navigation = useNavigation();
    const onPressed = (screen) => {
        navigation.navigate(screen);
    }
    const video = useRef(null);

    return (
        <View>
            <StatusBar backgroundColor={"#0A0A0A"} />
            <Video
                ref={video}
                style={styles.backgroundVideo}
                source={require('../../assets/mixkit-close-up-of-a-stock-market-graphic-47016-hd-ready.mp4')}
                useNativeControls={false}
                resizeMode={ResizeMode.COVER}
                isLooping={true}
                isMuted={true}
                shouldPlay={true}
            />
            <View style={styles.body}>
                <Image source={require('../../assets/logo.png')} style={{ height:60, width:200 }} />
                <View style={{ width: 300, justifyContent: "center", marginTop:10 }}>
                    <Text style={styles.textHeader}>Join the Community, Start Today!</Text>
                </View>
                <View style={styles.main}>
                    <Button text={"Login"} bgColor={"#0575FD"} textColor={"#fff"} btnPressed={onPressed} screen={'login'} icon="arrow-forward"/>
                    <Button text={"Sign up"} bgColor={"#12B76A"} textColor={"#fff"} btnPressed={onPressed} screen={'register'} icon="person-add-outline"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#0F0F0F",
        opacity:.85,
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
    },
    backgroundVideo: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        position:"absolute",
        top:0,
        left:0
      },
});