import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import Header from '../../components/Header';
import { colors, sizeText, fonts } from '../../common/Custom';
import InputTextApp from '../../components/InputTextApp';
import ButtonApp from '../../components/ButtonApp';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        };
    }

    render() {
        let { phone, password } = this.state
        return (
            // <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <KeyboardAvoidingView style={styles.fill} behavior="height" enabled>
                <Header back={true} title={"Sign In"} navigation={this.props.navigation} />
                <View style={[styles.viewLogo]}>
                    <Image style={styles.image} source={require('../../assets/images/LogoOpen.png')} />
                </View>
                <View style={[styles.fill, styles.container]}>
                    <Text style={styles.textTitle}><Text style={styles.textHello}>Hello!</Text> Create your account and enjoy</Text>
                    <View style={[styles.fill, styles.form]}>
                        <InputTextApp 
                            value={phone} 
                            placeholder={"Phone Number"} 
                            onChangeText={(phone) => this.setState({phone})}
                            icon={"phone"}
                        />
                        <InputTextApp 
                            value={password} 
                            placeholder={"Password"} 
                            onChangeText={(password) => this.setState({password})}
                            icon={"lock"}
                        />
                        <ButtonApp title="Sign In" />
                    </View>
                    <Text 
                        onPress={()=>this.props.navigation.navigate('Register')}
                        style={styles.textSignIn}
                    >
                        Create Account
                    </Text>
                </View>
                </KeyboardAvoidingView>
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
        marginBottom: 30,
        height: 100,
    },
    image: {
        width: 150,
        height: '100%',
        resizeMode: 'contain'
    },
    container:{
        backgroundColor: colors.box,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        justifyContent: 'space-between'
    },
    textTitle: {
        color: colors.text2,
        fontSize: sizeText.textBigMax,
        fontFamily: fonts.Bahij_TheSansArabic,
        paddingHorizontal: 30,
        paddingVertical: 20,
        paddingTop: 15,
        width: '80%',
    },
    textHello: {
        color: colors.text3,
        fontSize: sizeText.textBigMax,
        fontFamily: fonts.Bahij_TheSansArabic,
    },
    form: {
        justifyContent: 'center'
    },
    textSignIn:{
        height: 40,
        color: colors.text3,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderTopWidth: 1, 
        borderTopColor: colors.border,
     }
})
