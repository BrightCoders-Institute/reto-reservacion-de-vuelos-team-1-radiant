import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import SignUpScreen from './src/screens/SignUpScreen';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';

function App(): JSX.Element {
  return (

    <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
  );
}


export default App;
