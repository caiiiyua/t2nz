/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TimelineHeader extends Component {

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.avatar}></View>
        <Text style={styles.nickname}>{this.props.nickname}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#81D4FA',
  },
  nickname: {
    fontSize: 32,
    fontWeight: '500',
    color: '#757575',
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 32,
    backgroundColor: '#F48FB1',
    marginTop: 40,
  },
});
