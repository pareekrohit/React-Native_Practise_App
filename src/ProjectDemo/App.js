import * as React from 'react';
// import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingscreen from '../ProjectDemo/src/OnBoardingscreen';
import Login from './src/Login.js';
import Registration from './src/Registration';

const Stack = createNativeStackNavigator();
// initialRouteName="OnBoardingdscreen"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
