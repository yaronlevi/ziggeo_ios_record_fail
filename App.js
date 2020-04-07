/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Ziggeo from 'react-native-ziggeo-library';
import { SafeAreaView, StatusBar, Button } from 'react-native';

const App: () => React$Node = () => {

  const onClick = async () => {

    Ziggeo.setAppToken('');    
    const token = await Ziggeo.record();

  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title='click' onPress={onClick} />
      </SafeAreaView>
    </>
  );
};

export default App;
