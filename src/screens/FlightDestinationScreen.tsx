import React, {useState} from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import styles from '../appTheme/AppTheme';
import {OriginDropDown} from '../components/OriginDropDown/OriginDropDown';
import {ButtonPrimary} from '../components/ButtonPrimary/ButtonPrimary';
import {SubTitle} from '../components/SubTitle/SubTitle';
import BookingCard from '../components/BookingCard/BookingCard';

interface Props extends StackScreenProps<any, any> {}

export const FlightDestinationScreen = ({navigation, route}: Props) => {
  const [selectedFlightOrigin] = useState(route.params?.selectedFlight || null);
  const [selectedFlightDestination, setSelectedFlightDestination] =
    useState(null);

  const handleSelectFlightDestination = (flight: any) => {
    setSelectedFlightDestination(flight);
  };

  return (
    <View style={styles.whereAreYouContainer}>
      <BookingCard
        selectedFlightOrigin={selectedFlightOrigin}
        selectedFlightDestination={selectedFlightDestination}
        date={null}
        passengers={null}
      />

      <View style={styles.selectionBookingField}>
        <SubTitle text="Where will you be flying to?" />
        <OriginDropDown onSelectFlight={handleSelectFlightDestination} />
      </View>

      <View style={styles.bookingScreensButton}>
        <ButtonPrimary
          title="Next"
          isValid={selectedFlightDestination ? true : false}
          disabled={selectedFlightDestination ? false : true}
          onPress={() =>
            navigation.navigate('CalendarScreen', {
              selectedFlightOrigin: selectedFlightOrigin,
              selectedFlightDestination: selectedFlightDestination,
            })
          }
        />
      </View>
    </View>
  );
};
