// Go to react navigation website - reactnavigation.org
// then go to docs
import * as React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../navigation/HomeScreen';
import Profile from '../navigation/Profile';

const Stack = createNativeStackNavigator();

const NavigationScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Navigation Screen</Text>
        <View style={design.buttonStyle}>
          <Button
            title="Home Screen"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
        <View style={design.buttonStyle}>
          <Button
            title="Profile Screen"
            onPress={() => {
              navigation.navigate('Profile');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const NavigationExScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Navigation Screen">
        <Stack.Screen
          name="Navigation Screen"
          component={NavigationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const design = StyleSheet.create({
  buttonStyle: {
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default NavigationExScreen;
