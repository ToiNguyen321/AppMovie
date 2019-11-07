import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors, sizeText, fonts } from '../../common/Custom';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class ItemTickets extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      const { item } = this.props;
      return (
         <View style={styles.container}>
            <View style={styles.viewImage}>
               <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.content}>
               <Text style={styles.name}>{item.name}</Text>
               <View style={styles.viewRate}>
                  {
                     Array.from({ length: item.rate }).map((item, index) =>
                        <Icon color={colors.iconRate} key={index} style={styles.iconRate} name={"star"} size={sizeText.textSmall} />)
                  }
                  {
                     Array.from({ length: 5 - item.rate }).map((item, index) =>
                        <Icon color={colors.iconNoRate} key={index + 5} style={styles.iconRate} name={"star"} size={sizeText.textSmall} />)
                  }
                  <Text style={styles.textI}> | </Text>
                  <Text style={styles.textPoint}>{item.point}</Text>
               </View>
               <View style={styles.fill}>
                  <Text style={styles.textFillLeft}>Seats:</Text>
                  <Text style={styles.textFillRight}>4 Seats</Text>
               </View>
               <View style={styles.fill}>
                  <Text style={styles.textFillLeft}>Price:</Text>
                  <Text style={styles.textFillRight}>550 DK</Text>
               </View>
               <View style={styles.fill}>
                  <Text style={styles.textFillLeft}>Date:</Text>
                  <Text style={styles.textFillRight}>10  - October - 2019</Text>
               </View>
               <View style={styles.fill}>
                  <Text style={styles.textFillLeft}>Time:</Text>
                  <Text style={styles.textFillRight}>13.30  :  16.30 PM</Text>
               </View>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 15,
      marginBottom: 25,
      padding: 10,
      backgroundColor: colors.box2,
      height: 140,
      borderRadius: 7,
      flexDirection: 'row'
   },
   viewImage: {
      width: 110,
      height: 140,
      marginRight: 15,
   },
   image: {
      width: '100%',
      height: '100%',
      borderRadius: 5,
   },
   content: {
      flex: 1,
      justifyContent: 'center'
   },
   name: {
      color: colors.text1,
      fontSize: sizeText.textButton,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold
   },
   textName: {
      color: colors.text2,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
      fontSize: sizeText.textNormal,
      textAlign: 'center',
      marginTop: 5,
   },
   viewRate: {
      justifyContent: 'flex-start',
      alignContent: 'center',
      flexDirection: 'row',
      borderBottomColor: colors.border,
      paddingBottom: 2,
      borderBottomWidth: 1,
      marginRight: 20,
   },
   iconRate: {
      marginRight: 2,
      textAlignVertical: 'center'
   },
   textI: {
      color: colors.text2,
      fontFamily: fonts.Bahij_TheSansArabic,
      fontSize: sizeText.textSmall,
      textAlign: 'center',
   },
   textPoint: {
      color: colors.text3,
      fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
      fontSize: sizeText.textSmall,
      textAlign: 'center',
   },
   fill: {
      flexDirection: 'row',
   },
   textFillLeft: {
      color: colors.text1,
      fontFamily: fonts.Bahij_TheSansArabic,
      fontSize: sizeText.textSmall,
      marginRight: 5,
   },
   textFillRight: {
      color: colors.text2,
      fontFamily: fonts.Bahij_TheSansArabic,
      fontSize: sizeText.textSmall,
   }
});