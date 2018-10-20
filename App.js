import React from 'react';
import {View,Text} from 'react-native';

import AddEntry from './components/AddEntry'

export default class App extends React.Component {
  componentDidMount(){}
  render() {
    return (
      <View>
        <Text>-</Text>
        <Text>-</Text>
        <Text>-</Text>
        <AddEntry />
      </View>
    );
  }
}
