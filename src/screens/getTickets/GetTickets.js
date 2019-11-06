import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import GetTicketTrailer from './GetTicketTrailer';

export default class GetTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <GetTicketTrailer />
      </ScrollView>
    );
  }
}
