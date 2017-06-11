/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TimelineNode extends Component {

  renderLineNode(datetime) {
    if (datetime) {
      return (
        <View style={styles.line}>
          <View style={styles.node}></View>
        </View>
      );
    } else {
      return (
        <View style={styles.lineGrey}>
          <View style={styles.nodeGrey}></View>
        </View>
      );
    }
  }

  render() {

    return (
      <View style={styles.container}>
        {this.renderLineNode(this.props.date)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxWidth: 30,
    justifyContent: 'center',
  },
  line: {
    width: 4,
    backgroundColor: '#66BB6A',
  },
  lineGrey: {
    width: 4,
    backgroundColor: '#BDBDBD',
  },
  node: {
    width: 18,
    height: 18,
    backgroundColor: '#F48FB1',
    borderRadius: 9,
    alignSelf: 'center',
    marginTop: 24,
  },
  nodeGrey: {
    width: 18,
    height: 18,
    backgroundColor: '#BDBDBD',
    borderRadius: 9,
    alignSelf: 'center',
    marginTop: 24,
  }
});
