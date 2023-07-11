import React, { useState } from 'react';
import { View } from 'react-native';
import { OriginDropDown } from '../components/OriginDropDown/OriginDropDown';
import { ButtonPrimary } from '../components/ButtonPrimary/ButtonPrimary';
import styles from '../appTheme/AppTheme';
import FlightInfo from '../components/FlightInfo/FlightInfo';
import Icon from 'react-native-vector-icons/Ionicons';
import { SubTitle } from '../components/SubTitle/SubTitle';



export const WhereAreYouScreen = ({ navigation }: any) => {

  const [selectedFlightOrigin, setSelectedFlightOrigin] = useState(null);

  const handleSelectFlight = (flight: any) => {
    setSelectedFlightOrigin(flight);
  };

  return (
    <View style={styles.whereAreYouContainer}>
      <View style={styles.flightBookingInfo}>
        {selectedFlightOrigin ?
          <View style={styles.flightInfoContainer}>

            <View style={styles.flightInfoTextContainer}>
              <FlightInfo selectedFlight={selectedFlightOrigin} />
            </View>

            <View style={styles.flightInfoIconContainer}>
              <Icon name={'airplane'} size={25} color={'#2D7BDD'} />
            </View>

          </View>
          : null}
      </View>

      <View style={styles.selectionBookingField}>
        <SubTitle text="Where are you now?" />
        <OriginDropDown onSelectFlight={handleSelectFlight} />
      </View>

      <View style={styles.bookingScreensButton}>
        <ButtonPrimary
          title="Next"
          isValid={selectedFlightOrigin ? true : false}
          disabled={selectedFlightOrigin ? false : true}
          onPress={() => navigation.navigate('FlightDestinationScreen', { selectedFlight: selectedFlightOrigin })} />
      </View>
    </View>
  );
};
