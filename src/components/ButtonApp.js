import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts, sizeText } from '../common/Custom';
// import propTypes from 'Prop-Types';
export default class ButtonApp extends Component {
    _onPress = () => {
        const { onPress } = this.props;
        if (onPress) {
            onPress()
        } else {
            alert("OnPress Button")
        }
    }
    render() {
        const { title, button2, onPress } = this.props;
        return (
            <TouchableOpacity
                onPress={this._onPress}
            >
                <View style={[styles.viewButton, button2 && styles.backgroundColor]}>
                    <Text style={styles.text}> {title || "Button"} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    viewButton: {
        height: 45,
        marginHorizontal: 30,
        marginBottom: 15,
        backgroundColor: colors.button1,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundColor: {
        backgroundColor: colors.button2,
    },
    text: {
        fontFamily: fonts.Bahij_TheSansArabic,
        color: colors.text1,
        fontSize: sizeText.textBig,
    }
})