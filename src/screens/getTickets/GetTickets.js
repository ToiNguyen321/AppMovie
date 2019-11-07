import React, { Component } from 'react';
import { View, Animated, ScrollView, Dimensions } from 'react-native';
import GetTicketTrailer from './GetTicketTrailer';
import ProfileTickets from './ProfileTickets';
import ButtonGetTickets from './ButtonGetTickets';
import BoxCast from './BoxCast';
import BoxSimilar from './BoxSimilar';
import BoxChoose from './BoxChoose';
const { height } = Dimensions.get('window')
export default class GetTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollBoxChoose: new Animated.Value(height)
    };
  }
  _showChoose = () => {
    Animated.timing(
      this.state.scrollBoxChoose,
      {
        toValue: 0,
        duration: 500
      }
    ).start()
  }
  _hideChoose = () => {
    Animated.timing(
      this.state.scrollBoxChoose,
      {
        toValue: height,
        duration: 500
      }
    ).start()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={{ paddingBottom: 45, }}
        >
          <GetTicketTrailer />
          <ProfileTickets />
          <BoxCast />
          <BoxSimilar />       
        </ScrollView>
        <BoxChoose scrollBoxChoose={this.state.scrollBoxChoose} _hideChoose={this._hideChoose} />
        <ButtonGetTickets _showChoose={this._showChoose}  />
      </View>
    );
  }
}
