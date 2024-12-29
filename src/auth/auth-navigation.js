import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/loginScreen';
import RegisterScreen from '../screens/registerScreen';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='welcome' screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen name='welcome' component={WelcomeScreen} />
        <Stack.Screen name='login' component={LoginScreen} />
        <Stack.Screen name='register' component={RegisterScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation