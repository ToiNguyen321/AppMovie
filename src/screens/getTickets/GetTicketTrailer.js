import React, { Component } from 'react';
import { Image, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
export default GetTicketTrailer = (props) => (
    <View style={styles.container}>
        <Image source={require('../../assets/images/video/video1.png')} style={styles.video}  />
        <LinearGradient colors={['rgba(29,29,29,0)', 'rgba(29,29,29,0)', 'rgba(29,29,29,1.0)']} style={[StyleSheet.absoluteFillObject, { flex: 1 }]} />
    </View>
)
const styles = StyleSheet.create({
    container: {
        height: 250,
    },
    video: {
        width: '100%',
        height: '100%',
    }
})