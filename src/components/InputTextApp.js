import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { colors, sizeText, fonts } from '../common/Custom';
export default class InputTextApp extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }
   _onChangeText = (val) => {
      let { onChangeText } = this.props
      onChangeText && onChangeText(val)
   }
   render() {
      const { icon, value, placeholder, maxLength, autoCompleteType } = this.props;
      return (
         <View style={styles.container}>
            {
               icon
               &&
               <Icon
                  name={icon}
                  color={colors.text2}
                  size={20}
                  style={styles.icon}
               />
            }
            <TextInput
               style={[styles.inputStyle, icon && styles.inputStylePadding ]}
               autoCorrect={false}
               placeholder={placeholder}
               value={value}
               onChangeText={this._onChangeText}
               placeholderTextColor={colors.text2}
               maxLength={maxLength || 50}
               autoCompleteType={autoCompleteType || "off"}
            />
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      height: 45,
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: colors.button2,
      marginBottom: 15,
      marginHorizontal: 30,
   },
   inputStyle: {
      color: colors.text2,
      paddingVertical: 5,
      marginRight: 10,
      marginLeft: 25,
      fontFamily: fonts.Bahij_TheSansArabic,
      fontSize: sizeText.textButton,
      textAlignVertical: 'center',
      overflow: 'hidden',
      width: Dimensions.get('window').width - 110,
   },
   inputStylePadding: {
      marginLeft: 0
   },
   icon: {
      paddingLeft: 10,
      paddingRight: 10
   }
})