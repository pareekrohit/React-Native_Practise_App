import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

// To accommodate different screen sizes, React Native offers Flexbox support.
// Same like a linerlayout
//flexbox offers three main properties −
//flexDirection alignItems, justifyContent,flexWrap.

const DemoScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
      }}>
      {/* <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'darkorange'}} />
      <View style={{flex: 3, backgroundColor: 'green'}} /> */}

      <View style={{height: 100, width: 100, backgroundColor: 'red'}} />
      <View style={{height: 100, width: 100, backgroundColor: 'green'}} />
      <View style={{height: 100, width: 100, backgroundColor: 'yellow'}} />
    </SafeAreaView>
  );
};

export default DemoScreen;
