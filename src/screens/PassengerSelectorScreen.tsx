import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../appTheme/AppTheme';
import BookingCard from '../components/BookingCard/BookingCard';
import { StackScreenProps } from '@react-navigation/stack';
import { SubTitle } from '../components/SubTitle/SubTitle';
import { ButtonPrimary } from '../components/ButtonPrimary/ButtonPrimary';
import { PassengersSelector } from '../components/PassengersSelector/PassengersSelector';


interface Props extends StackScreenProps<any, any> {}

export const PassengerSelectorScreen = ({navigation, route}: Props) => {

const [selectedPassengers, setSelectedPassengers] = useState(1);

    const handleSelectPassengers = (index: any) => {
        setSelectedPassengers(index);
    };

    const [selectedFlightOrigin] = useState(
        route.params?.selectedFlightOrigin || null,
      );
      const [selectedFlightDestination] = useState(
        route.params?.selectedFlightDestination || null,
      );
      const [selectedDate] = useState(
        route.params?.selectedDate || null,
      );

  return (
    <View style={styles.whereAreYouContainer}>
      <BookingCard
        selectedFlightOrigin={selectedFlightOrigin}
        selectedFlightDestination={selectedFlightDestination}
        date={selectedDate}
        passengers={selectedPassengers}
      />

      <View style={styles.selectionBookingField}>
        <SubTitle text="How many passengers?" />
        <PassengersSelector onSelectPassengers={handleSelectPassengers} />
      </View>

      <View style={styles.bookingScreensButton}>
        <ButtonPrimary
          title="Next"
          isValid={selectedPassengers ? true : false}
          disabled={selectedPassengers ? false : true}
          onPress={() => navigation.navigate('WhereAreYouScreen', {})}
        />
      </View>
    </View>
  );
}
