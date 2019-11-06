import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ItemBox from '../../../components/ItemBox';

const data = [
    {id: 1, image: require('../../../assets/images/movie/movie1.png'), name: 'Tứ đại thiên', rate: 4, point: 8.7},
    {id: 2, image: require('../../../assets/images/movie/movie2.png'), name: 'Lôi thanh', rate: 2, point: 8.7},
    {id: 3, image: require('../../../assets/images/movie/movie3.png'), name: 'Liên Hàn', rate: 4, point: 8.7},
    {id: 4, image: require('../../../assets/images/movie/movie4.png'), name: 'Flash Furious', rate: 5, point: 8.7},
]
export default class BoxMovieByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5}}
      >
          {
              data.map((item, index) => <ItemBox navigation={this.props.navigation} lengthData={data.length} key={item.id.toString()} index={index}  item={item} />)
          }
      </ScrollView>
    );
  }
}
