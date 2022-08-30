import {View, Text, StyleSheet, Settings, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Post from './PostScreen';
import ChatScreen from './ChatScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

export default function DashboardTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitle: 'Travel App',
        headerShown: false,

        tabBarStyle: {
          // position: 'absolute',
          // bottom: 25,
          // left: 20,
          // right: 20,
          width: '95%',
          alignSelf: 'center',
          marginBottom: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 10,
          // paddingVertical: 2,
          // paddingHorizontal: 2,
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
                source={require('../../../../assets/images/home_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#AD40AF' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#AD40AF' : '#748c94', fontSize: 12}}>
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
                source={require('../../../../assets/images/post_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#AD40AF' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#AD40AF' : '#748c94', fontSize: 12}}>
                POST
              </Text>
            </View>
          ),
        }}
      />

      {/* <Tab.Screen
        name="Add"
        component={Post}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../../../../assets/images/plus_icon.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#AD40AF',
              }}
            />
          ),

          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      /> */}

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../../../assets/images/chat_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#AD40AF' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#AD40AF' : '#748c94', fontSize: 12}}>
                CHAT
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../../../../assets/images/settings_icon.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#AD40AF' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#AD40AF' : '#748c94', fontSize: 12}}>
                SETTINGS
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// 7F5DF0

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 6,
  },
});
