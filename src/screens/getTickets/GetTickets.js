import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GetTicketTrailer from './GetTicketTrailer';
import ProfileTickets from './ProfileTickets';
import ButtonGetTickets from './ButtonGetTickets';
import BoxCast from './BoxCast';

export default class GetTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <GetTicketTrailer />
          <ProfileTickets />
          <BoxCast />         
        </ScrollView>
        <ButtonGetTickets />
      </View>
    );
  }
}
