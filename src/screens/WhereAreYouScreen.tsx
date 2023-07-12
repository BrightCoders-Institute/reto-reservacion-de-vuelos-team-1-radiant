import React, {useState} from 'react';
import {View} from 'react-native';
import {OriginDropDown} from '../components/OriginDropDown/OriginDropDown';
import {ButtonPrimary} from '../components/ButtonPrimary/ButtonPrimary';
import styles from '../appTheme/AppTheme';
import {SubTitle} from '../components/SubTitle/SubTitle';
import BookingCard from '../components/BookingCard/BookingCard';
export const WhereAreYouScreen = ({navigation}: any) => {
  const [selectedFlightOrigin, setSelectedFlightOrigin] = useState(null);

  const handleSelectFlight = (flight: any) => {
    setSelectedFlightOrigin(flight);
  };

  return (
    <View style={styles.whereAreYouContainer}>
      <BookingCard
        selectedFlightOrigin={selectedFlightOrigin}
        selectedFlightDestination={null}
        date={null}
        passengers={null}
      />

      <View style={styles.selectionBookingField}>
        <SubTitle text="Where are you now?" />
        <OriginDropDown onSelectFlight={handleSelectFlight} />
      </View>

      <View style={styles.bookingScreensButton}>
        <ButtonPrimary
          title="Next"
          isValid={selectedFlightOrigin ? true : false}
          disabled={selectedFlightOrigin ? false : true}
          onPress={() =>
            navigation.navigate('FlightDestinationScreen', {
              selectedFlight: selectedFlightOrigin,
            })
          }
        />
      </View>
    </View>
  );
};
