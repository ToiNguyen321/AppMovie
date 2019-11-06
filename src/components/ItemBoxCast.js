import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { fonts, sizeText, colors } from '../common/Custom';

const ItemBoxCast = ({item, index, length}) => (
    <View style={[styles.container, index === 0 && styles.first, index === length && styles.last]}>
        <Image source={item.image} style={styles.avatar} />
        <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.nameInFilm}>{item.nameInFilm}</Text>
    </View>
);

export default ItemBoxCast;
const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        alignItems: 'center',
    },
    first: {
        marginLeft: 15,
    },
    last: {
        marginRight: 15,
    },
    avatar: {
        width: 80,
        height: 100,
        borderRadius: 3,
    },
    name: {
        marginTop: 5,
        fontFamily: fonts.Bahij_TheSansArabic,
        fontSize: sizeText.textSmall,
        color: colors.text2,
        padding: 0,
    },
    nameInFilm: {
        fontFamily: fonts.Bahij_TheSansArabic,
        fontSize: sizeText.textSmall,
        color: colors.text3,
        padding: 0,
    }
});