import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import { LogInScreen } from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            cardStyle: {
              justifyContent: 'center',
              alignSelf: 'center',
              width: '100%',
              maxWidth: Dimensions.get('window').width * 0.9,
              marginHorizontal: 'auto',
            },
          }}>
          <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUpScreen" options={{ headerShown: false }} component={SignUpScreen} />
        </Stack.Navigator>
      );
    };
