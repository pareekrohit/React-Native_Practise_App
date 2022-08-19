import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';

class StateExScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: 'You Called state data',
      name: 'Rohit Pareek',
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.titleStyle}>
          Class Component with State Example
        </Text>
        <Text>State Data is : {this.state.data}</Text>
        <Text>State Data name : {this.state.name}</Text>

        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter your name"
          onChangeText={e => {
            this.setState({name: e});
          }}></TextInput>
        <Button
          title="Change state data"
          style={styles.buttonStyle}
          onPress={() => {
            this.setState({data: 'New State data updated'});
          }}></Button>
        <Button
          title="Change state name"
          style={styles.buttonStyle}
          onPress={() => {
            this.setState({name: 'Akash'});
          }}></Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontFamily: 'Cormorant-Regular',
    color: 'white',
    backgroundColor: 'red',
    marginBottom: 10,
  },

  textInputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
  },

  buttonStyle: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  red: {
    color: 'white',
    backgroundColor: 'red',
  },
  fonts: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: '',
  },
});

export default StateExScreen;
