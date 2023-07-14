import React from 'react';
import { Text, View } from 'react-native';
import styles from '../appTheme/AppTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { UserCard } from '../components/UserCard/UserCard';
import { AddFlightButton } from '../components/AddFlightsButton/AddFlightButton';

interface Props extends StackScreenProps<any, any> {}

export const MyFlightsScreen = ({navigation, route}: Props) => {


  return (
    <View style={ styles.myFlightsContainer }>
      <View style={styles.headerMyFlightsContainer} >
        <UserCard />
        <Text style={styles.titleStyle}>My Flights</Text>
      </View>

      <View style={ styles.addFlightsButtonContainer }>
        <AddFlightButton 
          title='+'
          isValid={true}
          disabled={false}
          onPress={() => navigation.navigate('WhereAreYouScreen')}
          />
      </View>
    </View>
  )
}
