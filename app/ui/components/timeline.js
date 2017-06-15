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

import moment from 'moment';

import TimelineHeader from './header'
import TimelineBox from './timelinebox'

export default class Timeline extends Component {

  state = {today: moment()}

  componentDidMount() {
    console.log("componentDidMount")
    // setInterval(() => {
    //   this.setState({today: this.state.today.add(1, 'days') })
    // }, 1000)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: " + prevProps + prevState)
  }

  render() {

    // let eoiDate = new Date("January 18, 2017")
    let eoiDate = moment("January 18, 2017", "MMMM D, YYYY")
    let {today} = this.state
    let nickname = "Caiy"

    let pendingDurationMilliseconds = today - eoiDate
    let pendingDuration = Math.floor(moment.duration(pendingDurationMilliseconds, 'milliseconds').asDays())

    console.log("render...." + new Date("January 18, 2017").getTime())

    return (
      <ScrollView style={styles.container}>
        <TimelineHeader nickname={nickname} duration={pendingDuration}/>
        <View style={styles.content}>
          <View style={styles.datetime}>
            <Text style={styles.datetimeText}>{today.format('dddd D MMM YYYY').toUpperCase()}</Text>
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
            <TimelineBox title={item.title} date={new Date(item.date).getTime()}/>
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
