import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { colors, sizeText, fonts } from '../../common/Custom';
import Icon from 'react-native-vector-icons/FontAwesome'
export default ProfileTickets = (props) => (
    <View style={styles.container}>
        <View style={styles.viewImage}>
            <Image style={styles.image} source={require('../../assets/images/movie/movie1.png')} />
        </View>
        <View style={styles.content}>
            <View style={styles.contentTop}>
                <Text style={styles.contentTopName}>Joker  2019</Text>
                {
                    Array.from({ length: 4 }).map((item, index) =>
                        <Icon color={colors.iconRate} key={index} style={styles.iconRate} name={"star"} size={sizeText.textSmall} />)
                }
                {
                    Array.from({ length: 5 - 4 }).map((item, index) =>
                        <Icon color={colors.iconNoRate} key={index + 5} style={styles.iconRate} name={"star"} size={sizeText.textSmall} />)
                }
                <Text style={styles.textI}>|</Text>
                <Text style={styles.textPoint}>8.7</Text>
            </View>
            <View style={styles.viewLanguage}>
                <Text style={styles.contentLanguage}>Language: English</Text>
            </View>
            <Text style={styles.contentDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
        </View>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingTop: 20,
    },
    viewImage: {
        width: 110,
        height: 160,
        marginRight: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 3,
    },
    content: {
        flex: 1
    },
    contentTop: {
        flexDirection: 'row',
    },
    contentTopName: {
        color: colors.text1,
        fontSize: sizeText.textBig,
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
        marginRight: 10,
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
        textAlignVertical: 'center',
        marginHorizontal: 1,
    },
    textPoint: {
        color: colors.text3,
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
        fontSize: sizeText.textSmall,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    viewLanguage: {
        borderBottomColor: colors.border,
        width: '70%',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
    },
    contentLanguage: {
        fontFamily: fonts.Bahij_TheSansArabic,
        color: colors.text2,
        fontSize: sizeText.textNormal
    },
    contentDescription: {
        fontFamily: fonts.Bahij_TheSansArabic,
        color: colors.text2,
        fontSize: sizeText.textSmall
    }

});
