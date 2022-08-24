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
import {WithLocalSvg} from 'react-native-svg';
import CustomButton from './components/CustomButton';

const Login = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          // flex: 1,
          width: '100%',
          paddingHorizontal: 25,
          alignItems: 'center',
        }}>
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
          }}>
          Login
        </Text>

        <TextInput placeholder="Email" style={styles.input} />

        <TextInput
          placeholder="Password"
          style={[styles.input, {marginBottom: 5}]}
          secureTextEntry={true}
        />

        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
            marginBottom: 20,
          }}>
          <TouchableOpacity onPress={() => {}}>
            <Text
              style={{color: '#AD40AF', fontWeight: '700', marginBottom: 20}}>
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          onPress={() => {}}
          style={{
            width: '100%',
            backgroundColor: '#AD40AF',
            padding: 15,
            borderRadius: 10,
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Roboto-Medium',
              fontWeight: '700',
              fontSize: 16,
              color: 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity> */}

        <View style={{width: '100%', marginBottom: 20}}>
          <CustomButton
            label={'Login'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ..
        </Text>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
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
          <Text style={{fontWeight: '700'}}>New to the app?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Registration');
            }}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
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

export default Login;
