import {
  View,
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Button,
} from 'react-native';
import React from 'react';

// const onTextClick = () => {
//   console.log('Kem Chho');
// };

function onClick() {
  alert('Hello button clicked!!');
}

const DemoScreen = props => {
  // debugger;
  // console.log("Kem Chho")}
  // console.warn(props.data);
  return (
    <SafeAreaView>
      <Text>{props.data}</Text>
      <Button onPress={onClick} title="Click Me" color={'#000000'}></Button>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default DemoScreen;
