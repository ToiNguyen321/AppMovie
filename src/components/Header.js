import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, sizeText, fonts } from '../common/Custom';
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    const { back, title } = this.props;
    return (
      <View style={styles.viewHeader}>
        {
          back
          &&
          <TouchableOpacity
            style={styles.iconBack}
            onPress={this._goBack}
          >
            <Icon size={22} name="left" color='#FFF' />
          </TouchableOpacity>
        }
        <Text style={styles.title}> {title || 'Header'} </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewHeader: {
    height: 45,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 45,
    paddingBottom: 35,
  },
  title: {
    color: colors.text1,
    fontSize: sizeText.textBig,
    fontFamily: fonts.Bahij_TheSansArabic_SemiBold
  },
  iconBack: {
    backgroundColor: '#2F2F3B',
    borderRadius: 30,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  }
})
