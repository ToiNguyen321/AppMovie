import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, sizeText, fonts } from '../../common/Custom';
import InputTextApp from '../../components/InputTextApp';
import ButtonApp from '../../components/ButtonApp';

export default class Register extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         email: '',
         phone: '',
         password: '',
         confirmPassword: ''
      };
   }

   render() {
      return (
         <View style={styles.fill}>
            <Header back={true} title={"Create Account"} navigation={this.props.navigation} />
            <ScrollView 
               contentContainerStyle={styles.scrollView}
            >
               <Text style={styles.textTitle}><Text style={styles.textHello}>Hello!</Text> Create your account and enjoy</Text>
               <View style={{flex: 1, justifyContent: 'center'}}>
                  <InputTextApp 
                     value={this.state.username} 
                     placeholder={"User Name"} 
                     onChangeText={(username) => this.setState({username})}
                  />
                  <InputTextApp 
                     value={this.state.email} 
                     placeholder={"Email Address"} 
                     onChangeText={(email) => this.setState({email})}
                  />
                  <InputTextApp 
                     value={this.state.phone} 
                     placeholder={"Phone Number"} 
                     onChangeText={(phone) => this.setState({phone})}
                  />
                  <InputTextApp 
                     value={this.state.password} 
                     placeholder={"Password"} 
                     onChangeText={(password) => this.setState({password})}
                  />
                  <InputTextApp 
                     value={this.state.confirmPassword} 
                     placeholder={"Confirm Password"} 
                     onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                  />
                  <ButtonApp title="Create Account" />
               </View>
               <Text 
                  onPress={()=>this.props.navigation.navigate('SignIn')}
                  style={styles.textSignIn}>
                  SIGN IN
               </Text>
            </ScrollView>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   fill: {
      flex: 1,
   },
   scrollView: { 
      justifyContent: 'space-between', 
      flex: 1,
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
   textSignIn:{
      height: 40,
      color: colors.text3,
      textAlign: 'center',
      textAlignVertical: 'center',
      borderTopWidth: 1, 
      borderTopColor: colors.border,
   }
})