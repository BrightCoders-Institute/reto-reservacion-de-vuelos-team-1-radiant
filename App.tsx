/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import SignUpForm from './src/components/SignUp';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <SignUpForm />
      </View>
    </SafeAreaView>
  );
}

export default App;
