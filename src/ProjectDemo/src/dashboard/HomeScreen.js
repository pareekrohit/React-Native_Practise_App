import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
// import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';

const arrayOfName = [
  {
    name: 'Rohit',
    dec: 'Put the profile section at the top of your resume.',
  },
  {
    name: 'Mahendra',
    dec: 'Decide which kind of the resume profile is the best for you.',
  },
  {
    name: 'Gunjan',
    dec: 'Write it at the very end, once your entire resume is ready.',
  },
  {
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },

  {
    name: 'Gunjan',
    dec: 'Write it at the very end, once your entire resume is ready.',
  },
  {
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },

  {
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },

  {
    name: 'Gunjan',
    dec: 'Write it at the very end, once your entire resume is ready.',
  },
  {
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // paddingBottom: 92,
      }}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        data={arrayOfName}
        renderItem={({item}) => {
          // console.log('items : ' + item.name);
          return (
            // <SafeAreaView>
            <View style={styles.cardStyle}>
              <View style={{flexDirection: 'row', height: '100%'}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    marginStart: 5,
                  }}>
                  <Image
                    resizeMode="contain"
                    borderRadius={25}
                    source={require('../../../../assets/images/profile.jpg')}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 400 / 2,
                      borderWidth: 1.5,
                      borderColor: '#7F5DF0',
                    }}
                  />
                </View>

                <View
                  style={{
                    height: '100%',
                    flexDirection: 'column',
                    flex: 5,
                    justifyContent: 'center',
                  }}>
                  <Text style={[styles.textStyle, {color: 'black'}]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.textStyle, {fontSize: 13}]}>
                    {item.dec}
                  </Text>
                </View>
              </View>
            </View>
            // </SafeAreaView>
          );
        }}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    height: 80,
    elevation: 3,
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 3,
    marginTop: 5,
  },
  textStyle: {
    fontSize: 16,
  },
});

export default HomeScreen;
