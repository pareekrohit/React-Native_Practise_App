import * as React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// ../../../assets/images/images-1.png

const OnBoardingscreen = ({navigation}) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.replace('Login')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image source={require('../../../assets/images/image-1.png')} />
          ),
          title: 'Welcome screen!',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image source={require('../../../assets/images/image-2.png')} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image source={require('../../../assets/images/image-3.png')} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBoardingscreen;
