import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // flex: 1,
        // marginHorizontal: 20,
        backgroundColor: '#AD40AF',
        padding: 15,
        borderRadius: 10,
        // marginBottom: 30,
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto-Medium',
          fontWeight: '700',
          fontSize: 16,
          color: 'white',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
