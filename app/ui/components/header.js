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
    backgroundColor: 'lightyellow',
  },
  nickname: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#757575',
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 38,
    backgroundColor: '#03A9F4',
    marginTop: 40,
  },
});
