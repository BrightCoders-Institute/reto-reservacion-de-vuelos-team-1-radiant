import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import { LogInScreen } from '../screens/LogInScreen';
import { Dimensions } from 'react-native';
import { WhereAreYouScreen } from '../screens/WhereAreYouScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {

    return (
        <Stack.Navigator
          screenOptions={{cardStyle: {
            justifyContent: 'center',
            alignSelf: 'center',
            width: '100%',
            maxWidth: Dimensions.get('window').width * 0.90,
            marginHorizontal: 'auto',
          }}}
          >
          {/* <Stack.Screen name="SignUpScreen" options={{headerShown: false}} component={SignUpScreen} />
          <Stack.Screen name="LogInScreen" options={{headerShown: false}} component={LogInScreen} /> */}
          <Stack.Screen name="WhereAreYouScreen" options={{headerShown: false}} component={ WhereAreYouScreen } />
        </Stack.Navigator>
      );
    }