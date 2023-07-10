import React from 'react';
import { View, Text } from 'react-native';
import styles from '../appTheme/AppTheme';
import { FlightProps } from '../interfaces/interfaces';


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
    </View>
  );
};

export default FlightInfo;
