/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
} from 'react-native';

import moment from 'moment';

export default class TimelineDetail extends Component {

  _onPressButton(date) {
    Alert.alert(date)
  }

  renderDatetime(date) {
    if (date) {
      let mDate = moment(date).format('MMMM D, YYYY')
      return (
        <TouchableOpacity style={styles.dateContainer}
          onPress={() => this._onPressButton(mDate)}>
          <Text style={styles.date}>{mDate}</Text>
        </TouchableOpacity>);
    } else {
      return (
        <TouchableOpacity style={styles.dateContainer}
          onPress={() => this._onPressButton("Pending")}>
          <Text style={styles.date}>Pending</Text>
        </TouchableOpacity>);
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
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
