import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BoxMovie from '../../components/BoxMovie';
import ItemNewTrailer from '../home/newTrailer/ItemNewTrailer';
const data = [
   { id: 1, video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4x", name: 'Tứ đại thiên', time: '03:37' },
   // { id: 2, video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", name: 'Lôi thanh', time: '04:27' },
   // { id: 3, video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", name: 'Liên Hàn', time: '02:37' },
   // { id: 4, video: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", name: 'Flash Furious', time: '05:05' },
]
export default class BoxSimilar extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }
   render() {
      return (
         <BoxMovie
            title={"Similar To This"}
            _onPress={() => alert("Similar")}
         >
            {
               data.map((item, index) => <ItemNewTrailer lengthData={data.length} key={item.id.toString()} index={index} item={item} />)
            }
         </BoxMovie>
      );
   }
}
