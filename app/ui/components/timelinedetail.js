/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TimelineDetail extends Component {

  renderDatetime(date) {
    if (date) {
      return (
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{this.props.date}</Text>
      </View>);
    } else {
      return (
      <View style={styles.dateContainerGrey}>
        <Text style={styles.date}>Pending</Text>
      </View>);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        {this.renderDatetime(this.props.date)}
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
    borderColor: '#F48FB1',
    padding: 3,
    alignItems: 'center',
  },
  dateContainerGrey: {
    maxWidth: 144,
    minHeight: 27.5,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: '#BDBDBD',
    padding: 3,
    alignItems: 'center',
  }
});
