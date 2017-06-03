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
  Image
} from 'react-native';

var MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
  {title: 'Title2', year: '2016', posters: {thumbnail: 'http://wallpaper-gallery.net/images/image/image-6.jpg'}},
];

export default class t2nz extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0]
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {movie.title}
        </Text>
        <Text style={styles.instructions}>
          {movie.year}
        </Text>
        <Image
          source={{uri: 'http://i.imgur.com/UePbdph.jpg'}}
          style={{width: 400, height: 400}}
        />
        <Image
          style={styles.thumbnail}
          source={require('./app/res/img/logo.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  thumbnail: {
    width: 80,
    height: 81,
  },
});

AppRegistry.registerComponent('t2nz', () => t2nz);
