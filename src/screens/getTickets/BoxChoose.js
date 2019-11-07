import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonApp from '../../components/ButtonApp';
import { colors, fonts, sizeText } from '../../common/Custom';
import { ScrollView } from 'react-native-gesture-handler';

const dataDate = [
   { id: 1, day: 10 },
   { id: 2, day: 11 },
   { id: 3, day: 12 },
   { id: 4, day: 13 },
   { id: 5, day: 14 },
   { id: 6, day: 15 },
   { id: 7, day: 16 },
]
const dataTime = [
   { id: 1, from: "08:00", to: "10:00" },
   { id: 2, from: "10:30", to: "12:30" },
   { id: 3, from: "13:00", to: "15:00" },
   { id: 4, from: "15:00", to: "17:30" },
   { id: 5, from: "18:00", to: "20:00" },
]
export default class BoxChoose extends Component {
   constructor(props) {
      super(props);
      this.state = {
         activeTime: 2,
         activeDate: 1
      };
   }
   _changeDate = (id) => {
      this.setState({
         activeDate: id
      })
   }
   _changeTime = (id) => {
      this.setState({
         activeTime: id
      })
   }
   _renderDate = (item, index, length) => {
      return (
         <TouchableOpacity
            key={item.id}
            onPress={this._changeDate.bind(this,item.id)}
         >
            <View 
               style={[
                  styles.boxDate,
                  index === 0 ? styles.itemFirst : null,
                  index === length-1 ? styles.itemLast : null,
                  item.id === this.state.activeDate ? styles.active : null
               ]}>
               <Text style={styles.dateDay}>{item.day}</Text>
               <Text style={styles.dateDaySmall}>Sunday</Text>
            </View>
         </TouchableOpacity>
      )
   }
   _renderTime = (item, index, length) => {
      return (
         <TouchableOpacity
            key={item.id}
            onPress={this._changeTime.bind(this,item.id)}
         >
            <View
               style={[
                  styles.boxTime,
                  index === 0 ? styles.itemFirst : null,
                  index === length-1 ? styles.itemLast : null,
                  item.id === this.state.activeTime ? styles.active : null
               ]}>
               <Text style={styles.dateTime}>{item.from} : {item.to}</Text>
            </View>
         </TouchableOpacity>
      )
   }
   render() {
      const { scrollBoxChoose, _hideChoose } = this.props;
      return (
         <Animated.View style={[styles.container, { transform: [{ translateY: scrollBoxChoose }] }]}>
            <TouchableOpacity 
               style={{flex: 1}}
               onPress={_hideChoose}
            >
            </TouchableOpacity>
            <View style={styles.content}>
               <View style={styles.box}>
                  <Text style={styles.title}>Choose Date</Text>
                  <Text style={styles.titleSmall}>Week 2 - October 2019</Text>
                  <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                  >
                     {
                        dataDate.map((item, index) => this._renderDate(item, index, dataDate.length))
                     }
                  </ScrollView>
               </View>
               <View style={styles.box}>
                  <Text style={styles.title}>Choose Time</Text>
                  <Text style={styles.titleSmall}>10.Sunday - October 2019</Text>
                  <ScrollView
                     horizontal
                     showsHorizontalScrollIndicator={false}
                  >
                     {
                        dataTime.map((item, index) => this._renderTime(item, index, dataTime.length))
                     }
                  </ScrollView>
               </View>
               <View style={styles.viewButton}>
                  <ButtonApp title="Choose Seats" />
               </View>
            </View>
         </Animated.View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      backgroundColor: 'rgba(0,0,0,0.2)',
      justifyContent: 'flex-end',
      zIndex: 99,
   },
   content: {
      height: 320,
      backgroundColor: colors.box,
      paddingTop: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
   },
   title: {
      color: colors.text1,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
      fontSize: sizeText.textBig,
      marginLeft: 20,
   },
   titleSmall: {
      color: colors.text1,
      fontFamily: fonts.Bahij_TheSansArabic,
      fontSize: sizeText.textSmall,
      marginLeft: 20,
      marginBottom: 10,
   },
   box: {
      flex: 1,
      paddingTop: 20,
   },
   active: {
      backgroundColor: colors.boxDateTimeActive
   },
   boxDate: {
      marginRight: 10,
      width: 50,
      height: 50,
      backgroundColor: colors.boxDateTime,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      borderRadius: 7,
   },
   dateDay: {
      height: 25,
      color: colors.text1,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
      fontSize: sizeText.textBigMax
   },
   dateDaySmall: {
      color: colors.text1,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
      fontSize: sizeText.textSmall
   },
   boxTime: {
      marginRight: 10,
      width: 100,
      height: 30,
      backgroundColor: colors.boxDateTime,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 7,
   },
   dateTime: {
      color: colors.text1,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
      fontSize: sizeText.textNormal
   },
   itemFirst: {
      marginLeft: 20,
   },
   itemLast: {
      marginRight: 20,
   },
   viewButton: {
      height: 60
   }
});
