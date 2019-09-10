import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 100, height: 500, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 500, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 500, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};
