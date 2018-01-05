import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import PropTypes from 'prop-types';


export default class Main_text extends Component{
  handleClick() {
    console.log('Click happened');
    Alert.alert("안녕 정윤아~~!!");
  }

  render(){
    console.log("asf");

    return(
      <TouchableOpacity onPress={this.handleClick}>
        <View>
          <Text style={styles.ask}>당신의 꿈은 무엇인가요?</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  ask: {
    fontSize: 60,
    //fontFamily: "Bmjua"
    fontFamily: "Bmdohyeon"
    //fontFamily: "Bmhanna"
    //fontFamily: "Bmkiranghaerang"
    //fontFamily: "Bmyeonsung"

  },
});
