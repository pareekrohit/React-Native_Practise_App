import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Home from './HomeScreen';
import ChatScreen from './ChatScreen';
import PostScreen from './PostScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    // <SafeAreaView
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: 'white',
    //   }}>
    //   <Text style={{fontSize: 20}}>Tabs Screen</Text>
    // </SafeAreaView>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" components={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;
