/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import DemoScreen from './src/propsExample/ScreenPropsSender'; /* Props Ex (Is Same like intent)*/
// import DemoScreen from './src/stateEx/classComponents/StateExScreenWithClass'; /*State Ex (Use only in class component for funcation component use hooks)*/
import {name as appName} from './app.json';
import NavigationExScreen from './src/navigation/NavigationExScreen';
// import DemoScreen from './src/flexEx/FlexExScreen'; //flex (same like a linear layout)

AppRegistry.registerComponent(appName, () => NavigationExScreen);
