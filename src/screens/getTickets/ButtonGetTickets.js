import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, fonts, sizeText } from '../../common/Custom';
import Fontisto from 'react-native-vector-icons/Fontisto';
const ButtonGetTickets = (props) => (
    <View style={styles.container}>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props._showChoose}
        >
            <View style={styles.content}>
                <Fontisto name="train-ticket" size={22} color={colors.text1}/>
                <Text style={styles.textButton}>Get Tickets</Text>
            </View>
        </TouchableOpacity>
    </View>
);

export default ButtonGetTickets;
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.button1,
        width: 200,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton: {
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
        color: colors.text1,
        fontSize: sizeText.textButton,
        marginLeft: 10
    }
});