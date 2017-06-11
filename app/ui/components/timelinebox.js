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

import TimelineNode from './line'

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
        <TimelineNode date={this.props.date}/>
        <Text>{this.props.title} {this.props.date}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timelinebox: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 64,
    minHeight: 120,
  },
});
