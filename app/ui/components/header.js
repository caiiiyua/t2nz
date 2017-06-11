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
        <View style={styles.headerText}>
          <Text style={styles.nickname}>{this.props.nickname}</Text>
          <Text style={styles.duration}>{this.props.duration}
            <Text style={styles.durationUnit}> DAYS</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: '#81D4FA',
  },
  headerText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nickname: {
    fontSize: 32,
    fontWeight: '500',
    color: '#757575',
  },
  duration: {
    fontSize: 32,
    fontWeight: '100',
    color: '#757575',
    alignSelf: 'flex-end',
  },
  durationUnit: {
    fontSize: 12,
  },
  avatar: {
    width: 92,
    height: 92,
    borderRadius: 24,
    backgroundColor: '#F48FB1',
    marginTop: 40,
    alignSelf: 'center',
  },
});
