/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';

import CSHome from "./Modules/CSHome";
import CSRoot from './Modules/CSRoot'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/*<SafeAreaView style={[{flex: 1, backgroundColor:'gray'}]}>*/}
      {/*  /!*<CSText />*!/*/}
      {/*</SafeAreaView>*/}
      {/*<CSHome />*/}
      <CSRoot/>
    </>
  );
};

const styles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10

  }
});

export default App;
