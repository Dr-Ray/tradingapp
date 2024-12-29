import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AppContext, AppContextProvider } from '../../appContext';
import { useContext } from 'react';
import AppNavigation from './app-navigation';
import AuthNavigation from './auth-navigation';

export default function Auth() {
    const { loggedIn } = useContext(AppContext);
    return (
        <NavigationContainer>
            {
                loggedIn ? <AppNavigation /> : <AuthNavigation />
            }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});