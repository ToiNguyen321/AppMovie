import React, { Component } from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import ButtonApp from '../components/ButtonApp';

export default class OpenApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animated: new Animated.Value(0)
    };
  }
  _goToRegister = () => {
    this.props.navigation.navigate('Register')
  }
  _goToSignIn = () => {
    this.props.navigation.navigate('SignIn')
  }
  componentDidMount(){
    Animated.timing(this.state.animated, {
      toValue: 1,
      duration: 1500,
    }).start()
  }
  render() {
    let { animated } = this.state;
    const translateY = animated.interpolate({
      inputRange: [0,1],
      outputRange: [-200, 0],
      extrapolate: 'clamp'
    })
    const translateYButton = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [200, 0],
      extrapolate: 'clamp'
    })
    const opacity = animated.interpolate({
      inputRange: [0, 1 ],
      outputRange: [0, 1 ],
      extrapolate: 'clamp'
    })
    return (
      <View style={[ styles.fill ]}>
        <Animated.View style={[ styles.fill, styles.viewLogo, { transform: [{ translateY }], opacity } ]}>
            <Image style={styles.image} source={require('../assets/images/LogoOpen.png')} />
        </Animated.View>
        <Animated.View style={[styles.viewButton, { transform: [{ translateY: translateYButton }] }]}>
            <ButtonApp title="Sign In" onPress={this._goToSignIn}  />
            <ButtonApp button2={true} title="Create Account" onPress={this._goToRegister} />
        </Animated.View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    viewButton: {
        marginBottom: 40,
    }
})