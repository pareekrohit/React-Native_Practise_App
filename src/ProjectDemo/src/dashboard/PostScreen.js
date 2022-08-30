import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const arrayOfName = [
  {
    id: 1,
    name: 'Concentrate foods',
    dec: 'In the agricultural practices of North America and northern Europe, barley, corn, oats, rye, and sorghums are grown almost entirely as animal feed, although small quantities are processed for human consumption as well. These grains are fed whole or ground, either singly or mixed with high-protein oil meals or other by-products, minerals, and vitamins to form a complete feed for pigs and poultry or an adequate dietary supplement for ruminants and horses.',
  },
  {
    id: 2,
    name: 'Straw and hulls',
    dec: 'Quantities of straw remaining after the harvesting of wheat, oats, barley, and rice crops are used as feed for cattle and other ruminants. ',
  },
  {
    id: 3,
    name: 'By-products of sugar beets and sugarcane',
    dec: 'From the sugar beet industry come beet tops, which are used on the farm either fresh or ensiled, and dried beet pulp and beet molasses',
  },
  {
    id: 4,
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },

  {
    id: 5,
    name: 'Gunjan',
    dec: 'Write it at the very end, once your entire resume is ready.',
  },
  {
    id: 6,
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },

  {
    id: 7,
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },

  {
    id: 8,
    name: 'Gunjan',
    dec: 'Write it at the very end, once your entire resume is ready.',
  },
  {
    id: 9,
    name: 'Ankit',
    dec: 'Put the profile section at the top of your resume.',
  },
];

const Post = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
      }}>
      {/* <Text style={{fontSize: 20}}>Post Screen</Text> */}

      <FlatList
        ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
        data={arrayOfName}
        renderItem={({item}) => {
          // console.log('items : ' + item.name);
          return (
            <View style={styles.cardStyle}>
              {/* <View style={{height: 100, backgroundColor: 'grey'}}> */}
              <View
                style={{
                  // justifyContent: 'center',
                  height: 100,
                }}>
                <Image
                  resizeMode="stretch"
                  source={
                    item.id % 2 == 0
                      ? require('../../../../assets/images/travller.jpeg')
                      : require('../../../../assets/images/login.jpg')
                  }
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </View>

              {console.log('deivide : ' + item.id)}

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 15,
                  flexShrink: 1,

                  paddingBottom: 5,
                }}>
                <Text style={[styles.textStyle, {color: 'black'}]}>
                  {item.name}
                </Text>
                <Text style={[styles.textStyle, {fontSize: 13}]}>
                  {item.dec}
                </Text>
              </View>
              {/* </View> */}
            </View>
          );
        }}></FlatList>
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

  cardStyle: {
    height: 180,
    elevation: 3,
    width: '95%',
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 3,
    marginTop: 5,
    overflow: 'hidden',
  },
  textStyle: {
    fontSize: 16,
    flexShrink: 1,
  },

  headerImage: {height: 120, width: 180, alignSelf: 'center'},
});

export default Post;
