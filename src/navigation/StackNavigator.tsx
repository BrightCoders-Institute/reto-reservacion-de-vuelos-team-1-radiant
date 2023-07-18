import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUpScreen from '../screens/SignUpScreen';
import {LogInScreen} from '../screens/LogInScreen';
import {Dimensions} from 'react-native';
import {WhereAreYouScreen} from '../screens/WhereAreYouScreen';
import {FlightDestinationScreen} from '../screens/FlightDestinationScreen';
import {CalendarScreen} from '../screens/CalendarScreen';
import {PassengerSelectorScreen} from '../screens/PassengerSelectorScreen';
import {FinalBookingScreen} from '../screens/FinalBookingScreen';
import { MyFlightsScreen } from '../screens/MyFlightsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
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
      <Stack.Screen
        name="SignUpScreen"
        options={{headerShown: false}}
        component={SignUpScreen}
      />
      <Stack.Screen
        name="LogInScreen"
        options={{headerShown: false}}
        component={LogInScreen}
      />
      <Stack.Screen
        name="WhereAreYouScreen"
        options={{headerShown: false}}
        component={WhereAreYouScreen}
      />
      <Stack.Screen
        name="FlightDestinationScreen"
        options={{headerShown: false}}
        component={FlightDestinationScreen}
      />
      <Stack.Screen
        name="CalendarScreen"
        options={{headerShown: false}}
        component={CalendarScreen}
      />
      <Stack.Screen
        name="PassengerSelectorScreen"
        options={{headerShown: false}}
        component={PassengerSelectorScreen}
      />
      <Stack.Screen
        name="FinalBookingScreen"
        options={{headerShown: false}}
        component={FinalBookingScreen}
      />
      <Stack.Screen
        name="MyFlightsScreen"
        options={{headerShown: false}}
        component={MyFlightsScreen}
      />
    </Stack.Navigator>
  );
};
