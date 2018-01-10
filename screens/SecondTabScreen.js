import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
} from 'react-native';


export default class Main extends Component<{}> {

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff'
//    backgroundColor: '#fffaf0',
  },
});
