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

    let eoiDate = new Date("January 18, 2017")
    let today = new Date()
    let nickname = "Caiy"

    return (
      <ScrollView style={styles.container}>
        <TimelineHeader nickname={nickname} duration={Math.floor((today-eoiDate)/(1000*3600*24))}/>
        <View style={styles.content}>
          <View style={styles.datetime}>
            <Text style={styles.datetimeText}>{today.toDateString().toUpperCase()}</Text>
          </View>
          <FlatList
            data={[
              {title: 'EOI', key: 'eoi', date: 'January 18, 2017'},
              {title: 'Invited To Apply', key: 'ita', date: 'Feburary 10, 2017'},
              {title: 'Application Received', key: 'ar', date: 'May 01, 2017'},
              {title: 'Employment Investiment', key: 'ei', date: 'April 04, 2017'},
              {title: 'Online Approved', key: 'oa'},
              {title: 'Approved In Principle', key: 'aip'}]}
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
  },
  content: {
    flex: 3,
  },
  datetime: {
    backgroundColor: '#F5F5F5',
    height: 48,
    paddingRight: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  datetimeText: {
    fontSize: 22,
    fontWeight: '100',
  },
});
