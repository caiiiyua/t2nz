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
import TimelineDetail from './timelinedetail'

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
        <TimelineDetail title={this.props.title} date={this.props.date}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timelinebox: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 64,
    minHeight: 100,
  },
});
