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

        <View style={styles.buttonStyle}>
          <Button
            title="Change state data"
            onPress={() => {
              this.setState({data: 'New State data updated'});
            }}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title="Change state name"
            onPress={() => {
              this.setState({name: 'Akash'});
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontFamily: 'Corm',
    color: 'white',
    backgroundColor: 'green',
    marginBottom: 10,
    paddingHorizontal: 20,
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
    marginTop: 10,
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
