import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, fonts, sizeText } from '../common/Custom';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ItemBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _onPress = () => {
    this.props.navigation.navigate('GetTickets');
  }
  render() {
    const { item, index, lengthData } = this.props
    return (
      <TouchableOpacity
        onPress ={this._onPress}
      >
        <View style={[
            styles.container,
            index === 0 ? styles.marginLeft : null,
            index === lengthData-1 ? styles.marginRight : null,
          ]}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.textName}>{item.name}</Text>
          <View style={styles.bottom}>
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
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginRight: 5,
  },
  marginLeft: {
    marginLeft: 15,
  },
  marginRight: {
    marginRight: 15,
  },
  image: {
    width: 120,
    height: 180,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  textName: {
    color: colors.text2,
    fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
    fontSize: sizeText.textNormal,
    textAlign: 'center',
    marginTop: 5,
  },
  bottom: {
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
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
  }
});