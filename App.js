import React from 'react';
import {View, Text} from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  
  state = {
    value: 0
  }
  componentDidMount(){}
  render() {
    return (
      <Provider store={createStore(reducer)} >
        <View>
          <Text>-</Text>
          <Text>-</Text>
          <AddEntry />
        </View>
      </Provider>
    );
  }
}