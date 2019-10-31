import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import InputSearch from './InputSearch';
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
        <View style={styles.headerHome}>
          <View style={{ justifyContent: 'center', marginRight: 10}}>
            <FontAwesome name="vcard-o" size={25} />
          </View>
          <View style={styles.fill}>
            <InputSearch
              value={textSearch}
              placeholder={"Search here"}
              onChangeText={(textSearch) => this.setState({ textSearch })}
              icon={"search"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  headerHome: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  }
})