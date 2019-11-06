import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';
import { colors, fonts, sizeText } from '../../../common/Custom';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default class ItemNewTrailer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { item, index, lengthData } = this.props
        return (
            <View style={[
                styles.container,
                index === 0 ? styles.marginLeft : null,
                index === lengthData - 1 ? styles.marginRight : null,
            ]}>
                <View style={styles.video}>
                    <Video source={{uri: item.video}}   // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref
                        }}
                        pause={true}
                        onBuffer={()=>console.log("onBuffer")}                // Callback when remote video is buffering
                        onError={(e)=>console.log("onError", e)}  
                        // resizeMode={'contain'}                                     // Store reference
                        style={styles.fullScreen} />
                </View>
                <View style={styles.nameTime}>
                    <Text style={styles.textName}>{item.name}</Text>
                    <Icon name={"clock"} size={10} color={colors.text2} />
                    <Text style={styles.textTime}>{item.time}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginRight: 8
    },
    marginLeft: {
        marginLeft: 15,
    },
    marginRight: {
        marginRight: 15,
    },
    video: {
        width: 180,
        height: 120,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: 5,
      },
    nameTime: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    textName: {
        color: colors.text2,
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
        fontSize: sizeText.textNormal,
        textAlign: 'center',
        marginRight: 8,
    },
    textTime: {
        color: colors.text2,
        fontFamily: fonts.Bahij_TheSansArabic,
        fontSize: sizeText.textSmall,
        textAlign: 'center',
        marginLeft: 3,
    },
});