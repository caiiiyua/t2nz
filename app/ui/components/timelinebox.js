/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class TimelineBox extends Component {

  state = {
    title: "",
    date: ""
  }

  componentDidMount() {
    state = this.props.data
  }
  render() {
    return (
      <View style={styles.timelinebox}>
        <Text>{this.props.title} {this.props.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timelinebox: {
    backgroundColor: '#F8BBD0',
    minHeight: 120,
  },
});
