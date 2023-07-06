import React from 'react';
import {View, Text} from 'react-native';
import styles from '../appTheme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const FlightInfo = () => {
  return (
    <View style={styles.flightinfoMainContainer}>
      <View style={styles.flightInfoContainer}>
        <View>
          <Text style={styles.flightInfoAbbrev}>AMS</Text>
          <Text>Netherlands</Text>
        </View>

        <View style={styles.flightInfoIconContainer}>
          <Icon name={'airplane'} size={25} color={'#2D7BDD'} />
        </View>

        <View>
          <Text style={styles.flightInfoAbbrev}>PAR</Text>
          <Text>France</Text>
        </View>
      </View>

      <View style={styles.passengerInfo}>
        <Text style={styles.passengerInfoText}>September 3, 2020</Text>
        <Text style={styles.passengerInfoText}>2 passengers</Text>
      </View>
    </View>
  );
};

export default FlightInfo;
