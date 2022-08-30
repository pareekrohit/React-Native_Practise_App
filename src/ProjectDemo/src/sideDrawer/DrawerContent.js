import * as React from 'react';
import {View, Text} from 'react-native';
// import {
//   Avatar,
//   Title,
//   Caption,
//   Paragraph,
//   Drawer,
//   TouchableRipple,
//   Switch,
// } from 'react-native-paper';

import {createDrawerNavigator} from '@react-navigation/drawer';

import Profile from './Profile';
import WhatWeDo from './WhatWeDo';
import AboutUs from './AboutUs';
import DashboardTab from '../dashboard/DashboardTab';

const Drawer = createDrawerNavigator();

export default SideDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashboardTab" component={DashboardTab} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="WhatWeDo" component={WhatWeDo} />
      <Drawer.Screen name="AboutUs" component={AboutUs} />
    </Drawer.Navigator>
  );
};
