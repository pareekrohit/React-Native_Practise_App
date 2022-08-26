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

const Post = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{fontSize: 20}}>Post Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#AD40AF',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    width: '100%',
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 25,
  },

  headerImage: {height: 120, width: 180, alignSelf: 'center'},
});

export default Post;
