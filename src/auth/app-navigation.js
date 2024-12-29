import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardHome from '../screens/dashboard/home';
import ProfileScreen from '../screens/dashboard/profile';
import TradingScreen from '../screens/dashboard/trading';
import WalletScreen from '../screens/dashboard/wallet';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DepositScreen from '../screens/dashboard/deposit';
import WithdrawScreen from '../screens/dashboard/withdraw';
import ProfileSettings from '../screens/dashboard/profileSettings';
import HelpAndSupport from '../screens/dashboard/helpandsupport';
import SecurityScreen from '../screens/dashboard/security';
import NotificationsPage from '../screens/dashboard/notifications';
import DepositType from '../screens/dashboard/depositType';
import SuccessErrorPage from '../screens/successErrorPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavStack = () => {
  return (
    <Stack.Navigator initialRouteName='MyWallet'>
      <Stack.Screen
        name='MyWallet'
        options={{
          headerStyle: {
            backgroundColor: "#0F0F0F",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
        component={WalletScreen}
      />
      <Stack.Screen
        name='deposit'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={DepositScreen}
      />
      <Stack.Screen
        name='depositType'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={DepositType}
      />
      <Stack.Screen
        name='withdraw'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={WithdrawScreen}
      />
      <Stack.Screen
        name='profileSettings'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={ProfileSettings}
      />
      <Stack.Screen
        name='successError'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={SuccessErrorPage}
      />
    </Stack.Navigator>
  )
}

const AppNavStackProfile = () => {
  return (
    <Stack.Navigator initialRouteName='MyProfile'>
      <Stack.Screen
        name='MyProfile'
        options={{
          headerStyle: {
            backgroundColor: "#0F0F0F",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
        component={ProfileScreen}
      />
      <Stack.Screen 
        name='profileSettings'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={ProfileSettings} 
      />
      <Stack.Screen 
        name='helpandsupport'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }}  
        component={HelpAndSupport} 
      />
      <Stack.Screen 
        name='security'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={SecurityScreen} 
      />
      
    </Stack.Navigator>
  )
}

const AppNavStackHome = () => {
  return (
    <Stack.Navigator initialRouteName='MyHome'>
      <Stack.Screen
        name='MyHome'
        options={{
          headerShown:false,
          headerStyle: {
            backgroundColor: "#0F0F0F",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
        component={DashboardHome}
      />
      <Stack.Screen
        name='deposit'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={DepositScreen}
      />
      <Stack.Screen
        name='withdraw'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={WithdrawScreen}
      />
      <Stack.Screen
        name='profileSettings'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={ProfileSettings}
      />
      <Stack.Screen
        name='notification'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={NotificationsPage}
      />
      <Stack.Screen
        name='depositType'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={DepositType}
      />
      <Stack.Screen
        name='successError'
        options={{
          headerStyle:{
            backgroundColor:"#0F0F0F",
          },
          headerTitleStyle:{
            color:"#fff"
          }
        }} 
        component={SuccessErrorPage}
      />
    </Stack.Navigator>
  )
}

const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: '#090909',
      },
      tabBarActiveTintColor: "#fff"
    }}>
      <Tab.Screen
        name='home'
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
          headerShown: false,
        }}
        component={AppNavStackHome}
      />
      <Tab.Screen
        name='trading'
        options={{
          tabBarLabel: "Trading",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'trending-up-sharp' : 'trending-up-outline'} color={color} size={24} />
          ),
          headerStyle: {
            backgroundColor: "#0F0F0F",
          },
          headerTitleStyle: {
            color: "#fff"
          }
        }}
        component={TradingScreen}
      />
      <Tab.Screen
        name='wallet'
        options={{
          tabBarLabel: "Wallet",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'wallet-sharp' : 'wallet-outline'} color={color} size={24} />
          )
        }}
        component={AppNavStack}
      />
      <Tab.Screen
        name='profile'
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24} />
          ),
          headerShown: false,
        }}
        component={AppNavStackProfile}
      />
    </Tab.Navigator>
  )
}

export default AppNavigation;