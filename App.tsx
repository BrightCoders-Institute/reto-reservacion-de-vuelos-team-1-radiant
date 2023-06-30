/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <SignUpScreen />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    maxWidth: Dimensions.get('window').width * 0.90,
    marginHorizontal: 'auto',
  },
});

export default App;
