import * as React from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Profile = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={styles.titleStyle}>Profile Screen Navigation Example</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontFamily: 'Corm',
    color: 'white',
    backgroundColor: 'green',
    marginBottom: 10,
    paddingHorizontal: 20,
  },

  textInputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
  },
});

export default Profile;
