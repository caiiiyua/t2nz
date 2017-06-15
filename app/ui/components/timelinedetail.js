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
import DatePicker from 'react-native-datepicker'

export default class TimelineDetail extends Component {

  constructor(props){
      super(props)
      this.state = {date:"2017-06-15"}
  }

  _onPressButton(date) {
    Alert.alert(date)
  }

  renderDatetime(date) {
    if (date) {
      let mDate = moment(date).format('MMMM D, YYYY')
      return (

          <DatePicker
          style={styles.dateContainer}
          date={new Date(this.state.date)}
          mode="date"
          placeholder="select date"
          format="MMMM D, YYYY"
          minDate="2010-01-01"
          maxDate="2050-01-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          showIcon={false}
          TouchableComponent= {TouchableHighlight}
          customStyles={{
              dateTouchBody: {
              height: 27.5,
            },
            dateInput: {
              borderWidth: 0,
              height: 27.5,
              minHeight: 27.5,
            }
          }}
          onDateChange={(date) => {this.setState({date: date})}}
          />
        );
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
