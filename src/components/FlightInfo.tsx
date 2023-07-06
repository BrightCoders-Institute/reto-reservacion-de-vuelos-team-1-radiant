import React from 'react';
import {View, Text} from 'react-native';
import styles from '../appTheme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const FlightInfo = () => {
  return (
    <View style={styles.flightInfoContainer}>
      <View>
        <Text style={styles.flightInfoAbbrev}>AMS</Text>
        <Text>Netherlands</Text>
      </View>

      <Icon name={'airplane'} size={25} color={'#2D7BDD'} />

      <View>
        <Text style={styles.flightInfoAbbrev}>PAR</Text>
        <Text>France</Text>
      </View>
    </View>
  );
};

export default FlightInfo;
