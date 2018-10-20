import React from 'react';
import {View, Text, Slider} from 'react-native';

import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  state = {
    value: 0
  }
  componentDidMount(){}
  render() {
    return (
      <View>
        <Text>-</Text>
        <Text>-</Text>
        <AddEntry />
      </View>
    );
  }
}
