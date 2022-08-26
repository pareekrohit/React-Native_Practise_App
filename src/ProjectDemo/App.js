import * as React from 'react';
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import OnBoardingscreen from '../ProjectDemo/src/OnBoardingscreen';
import Login from './src/Login.js';
import Registration from './src/Registration';

import Post from './src/dashboard/PostScreen';
import HomeScreen from './src/dashboard/HomeScreen';
import ChatScreen from './src/dashboard/ChatScreen';
import Settings from './src/dashboard/SettingsScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          options={{headerShown: false}}
          name="OnBoarding"
          component={OnBoardingscreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Registration"
          component={Registration}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={DashboardTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const CustomTabBarButton = ({children, onPress}) => {
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>;
};

const DashboardTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: 'Travel App',
        headerShadowVisible: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          paddingVertical: 2,
          paddingHorizontal: 2,
          height: 65,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: '',

          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/images/home_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                HOME
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/images/post_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                POST
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Add"
        component={Post}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../assets/images/plus_icon.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),

          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/images/chat_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                CHAT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../assets/images/settings_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default App;
