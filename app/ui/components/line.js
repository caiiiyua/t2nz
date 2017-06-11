/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class TimelineNode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <View style={styles.node}></View>
        </View>
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
    backgroundColor: '#00897B',
  },
  node: {
    width: 18,
    height: 18,
    backgroundColor: '#EC407A',
    borderRadius: 9,
    alignSelf: 'center',
    marginTop: 24,
  }
});
