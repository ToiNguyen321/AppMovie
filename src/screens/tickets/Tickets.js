import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import { FlatList } from 'react-native-gesture-handler';
import ItemTickets from './ItemTickets';

const data = [
  { id: 1, image: require('../../assets/images/movie/movie1.png'), name: 'Tứ đại thiên', rate: 4, point: 8.7 },
  { id: 2, image: require('../../assets/images/movie/movie2.png'), name: 'Lôi thanh', rate: 2, point: 8.7 },
  { id: 3, image: require('../../assets/images/movie/movie3.png'), name: 'Liên Hàn', rate: 4, point: 8.7 },
  { id: 4, image: require('../../assets/images/movie/movie4.png'), name: 'Flash Furious', rate: 5, point: 8.7 },
]
export default class Tickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <FlatList 
          data={data}
          ListHeaderComponent={() => <Header title="My Tickets" />}
          renderItem={({item})=> <ItemTickets item={item} />}
          keyExtractor={item => item.id.toString()}
        />
    );
  }
}
