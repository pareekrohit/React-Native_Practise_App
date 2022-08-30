import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
  RefreshControl,
  Switch,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {SettingsData, Chevron} from './lib';

const fontFamily = Platform.OS === 'ios' ? 'Avenir' : 'sans-serif';

const SettingsScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 20}}>Settings Screen</Text>
    </SafeAreaView>
  );
};

export default SettingsScreen;
