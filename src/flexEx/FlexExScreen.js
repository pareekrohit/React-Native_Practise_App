import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const DemoScreen = () => {
  return (
    <SafeAreaView
      style={{backgroundColor: 'grey', flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} />
    </SafeAreaView>
  );
};

export default DemoScreen;
