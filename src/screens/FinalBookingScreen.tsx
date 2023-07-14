import React, {useState} from 'react';
import {View} from 'react-native';
import {SubTitle} from '../components/SubTitle/SubTitle';
import styles from '../appTheme/AppTheme';
import BookingCard from '../components/BookingCard/BookingCard';
import {StackScreenProps} from '@react-navigation/stack';
import {ButtonPrimary} from '../components/ButtonPrimary/ButtonPrimary';

interface Props extends StackScreenProps<any, any> {}
export const FinalBookingScreen = ({navigation, route}: Props) => {
  const [selectedFlightOrigin] = useState(
    route.params?.selectedFlightOrigin || null,
  );
  const [selectedFlightDestination] = useState(
    route.params?.selectedFlightDestination || null,
  );
  const [selectedDate] = useState(route.params?.selectedDate || null);
  const [selectedPassengers] = useState(
    route.params?.selectedPassengers || null,
  );
  return (
    <View style={styles.requestContainer}>
      <View style={styles.finishBookingField}>
        <BookingCard
          selectedFlightOrigin={selectedFlightOrigin}
          selectedFlightDestination={selectedFlightDestination}
          date={selectedDate}
          passengers={selectedPassengers}
        />
        <SubTitle text="Your request was received." />
      </View>
      <View style={styles.buttonFinishContainer}>
        <ButtonPrimary
          title="Finish"
          isValid={true}
          disabled={false}
          onPress={() =>
            navigation.navigate('MyFlightsScreen', {
              selectedFlightOrigin,
              selectedFlightDestination,
              selectedDate,
              selectedPassengers,
            })
          }
        />
      </View>
    </View>
  );
};
