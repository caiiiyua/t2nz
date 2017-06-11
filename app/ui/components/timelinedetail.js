/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TimelineDetail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.dateContainer}>
          <Text style={styles.date}>{this.props.date}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: '100',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: '200',
  },
  dateContainer: {
    maxWidth: 144,
    minHeight: 27.5,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#EC407A',
    padding: 3,
    alignItems: 'center',
  }
});
