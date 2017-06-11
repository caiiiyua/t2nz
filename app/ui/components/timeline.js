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
  FlatList,
  ScrollView
} from 'react-native';

import TimelineHeader from './header'
import TimelineBox from './timelinebox'

export default class Timeline extends Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        <TimelineHeader nickname="Caiy"/>
        <View style={styles.content}>
          <View style={styles.datetime}>
            <Text style={styles.datetimeText}>SUNDAY 11 JUN, 2017</Text>
          </View>
          <FlatList
            data={[
              {title: 'EOI', key: 'eoi', date: 'January 18, 2017'},
              {title: 'AR', key: 'ar', date: 'May 01, 2017'},
              {title: 'Employment Investiment', key: 'ei', date: 'April 04, 2017'},
              {title: 'OA', key: 'oa'},
              {title: 'AIP', key: 'aip'}]}
            renderItem={({item}) =>
            <TimelineBox title={item.title} date={item.date}/>
          }/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightblue'
  },
  content: {
    flex: 3,
    backgroundColor: 'skyblue',
  },
  datetime: {
    backgroundColor: '#F5F5F5',
    height: 48,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  datetimeText: {
    fontSize: 22,
    fontWeight: '100',
  },
});