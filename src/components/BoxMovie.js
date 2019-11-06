import React from 'react';
import { ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { colors, sizeText, fonts } from '../common/Custom';
const defaultOnPress = () =>{
    console.log("No OnPress")
}

export default BoxMovie = ({ children, _onPress = defaultOnPress, title = 'BoxMovie' }) => (
    <View style={styles.container}>
        <View style={styles.viewTop}>
            <Text style={styles.topTitle}>{title}</Text>
            <TouchableOpacity
                onPress={ _onPress}
            >
                <Text style={styles.topSee} >See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
        >
            {children}
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 25
    },
    viewTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    topTitle: {
        color: colors.text1,
        fontSize: sizeText.textButton,
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold
    },
    topSee:{
        color: colors.text2,
        fontSize: sizeText.textNormal,
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold
    }
});