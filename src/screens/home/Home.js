import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputSearch from './InputSearch';
import { ScrollView } from 'react-native-gesture-handler';
import { colors } from '../../common/Custom';
import NewTrailer from './newTrailer/NewTrailer';
import ComingSoon from './comingSoon/ComingSoon';
import MovieByCategory from './movieByCategory/MovieByCategory';
export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textSearch: ''
    };
  }

  render() {
    const { textSearch } = this.state
    return (
      <View style={styles.fill}>
        <ScrollView
          contentContainerStyle={styles.contentContainerStyle}
        >
          <View style={styles.headerHome}>
            <View style={{ justifyContent: 'center', marginRight: 10 }}>
              <FontAwesome 
                name="vcard-o" 
                size={25} 
                color={colors.iconTabNoActive} 
              />
            </View>
            <View style={styles.fill2}>
              <InputSearch
                value={textSearch}
                placeholder={"Search here"}
                onChangeText={(textSearch) => this.setState({ textSearch })}
                icon={"search"}
              />
            </View>
          </View>
          <MovieByCategory navigation={this.props.navigation} />
          <NewTrailer navigation={this.props.navigation} />
          <ComingSoon navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    // paddingTop: 25,
    paddingTop: 25,
  },
  fill2: {
    flex: 1,
  },
  headerHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 15,
  },
  contentContainerStyle: {
    // paddingVertical: 15,
  }
})