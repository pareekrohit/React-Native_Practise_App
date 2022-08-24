import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {WithLocalSvg} from 'react-native-svg';
import CustomButton from './components/CustomButton';

const Registration = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ScrollView
        contentContainerStyle={{
          //   flex: 1,
          justifyContent: 'center',
          flexGrow: 1,
          justifyContent: 'center',
        }}
        style={
          {
            //   width: '100%',
            //   flex: 1,
            //   backgroundColor: 'grey',
            //   marginHorizontal: 20,
            //   paddingHorizontal: 25,
            //   marginHorizontal: 25,
            //   alignItems: 'center',
            //   flexDirection: 'column',
            //   justifyContent: 'center',
          }
        }>
        <View style={{justifyContent: 'center', paddingHorizontal: 8}}>
          <Image
            style={styles.headerImage}
            source={require('../../../assets/images/login.jpg')}
          />
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontSize: 28,
              fontWeight: '700',
              color: '#333',
              marginBottom: 30,
              textAlign: 'center',
            }}>
            Register
          </Text>
          <TextInput
            placeholder="Full Name"
            style={[styles.input, {marginBottom: 20}]}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={[styles.input, {marginBottom: 20}]}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            style={[styles.input, {marginBottom: 20}]}
            secureTextEntry={true}
          />
          <View style={{width: '100%'}}>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          <TouchableOpacity
            style={[styles.input, {marginBottom: 20}]}
            onPress={() => setOpen(true)}>
            <Text color="#C7C7CD">Date Of Birth</Text>
          </TouchableOpacity>

          {/* <TextInput
            placeholder="Date Of Birth"
            style={[styles.input, {marginBottom: 20}]}
            secureTextEntry={true} 
          /> */}

          <View
            style={{
              width: '100%',
              paddingHorizontal: 20,
              marginTop: 20,
              marginBottom: 20,
            }}>
            <CustomButton
              style={{flex: 1}}
              label={'Register'}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
            Or, register with ..
          </Text>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 20,
              paddingHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#AD40AF',
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <WithLocalSvg
                width="20"
                height="20"
                asset={require('../../../assets/svg/gmail.svg')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#AD40AF',
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <WithLocalSvg
                width="20"
                height="20"
                asset={require('../../../assets/svg/facebook.svg')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {}}
              style={{
                borderColor: '#AD40AF',
                borderWidth: 1,
                borderRadius: 10,
                paddingHorizontal: 30,
                paddingVertical: 10,
              }}>
              <WithLocalSvg
                width="20"
                height="20"
                asset={require('../../../assets/svg/twitter.svg')}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontWeight: '700'}}>Already register?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#AD40AF',
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    // width: '100%',
    padding: 10,
    marginHorizontal: 20,
    flex: 1,
    marginBottom: 25,
  },

  headerImage: {
    height: 120,
    width: 180,
    alignSelf: 'center',
    flex: 1,
  },
});

export default Registration;
