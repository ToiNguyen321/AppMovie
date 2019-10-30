import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AppContainer from './navigators';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground
        style={{
          width: null,
          height: null,
          backgroundColor: 'transparent',
          flex: 1,
        }}
        source={require('./assets/images/Background.png')}
      >
        <AppContainer style={{ backgroundColor: 'transparent' }} ref='navigator'/>
      </ImageBackground>
    );
  }
}
