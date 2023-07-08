import React from 'react';
import { View, Text } from 'react-native';
import styles from '../appTheme/AppTheme';
interface FlightProps {
  selectedFlight: any;
  alignRight?: boolean; //Just for align the destination info on the right
}

const FlightInfo = ({ selectedFlight, alignRight }: FlightProps) => {
  return (
    <View style={styles.flightinfoMainContainer}>
      <View style={alignRight && styles.alignRight}>
        <Text style={styles.flightInfoAbbrev}>
          {selectedFlight ? selectedFlight.cityAbbreviation : ''}
        </Text>
        <Text style={styles.flightInfoCountry}>
          {selectedFlight ? selectedFlight.countryName : ''}
        </Text>
      </View>


      {/* <View style={styles.passengerInfo}>
        <Text style={styles.passengerInfoText}>September 3, 2020</Text>
        <Text style={styles.passengerInfoText}>2 passengers</Text>
      </View> */}
    </View>
  );
};

export default FlightInfo;
