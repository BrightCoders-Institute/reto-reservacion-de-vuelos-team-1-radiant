import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../appTheme/AppTheme';
import flightsData from '../data/flightsData.json';



export const OriginDropDown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <View style={styles.pickerStyle}>
      
      <Picker
        // style={ styles.pickerStyle }
         selectedValue={selectedOption}
         placeholder='Select Location'
        onValueChange={(value) => setSelectedOption(value)}
      >
        <Picker.Item style={styles.pickerItemStyle} label="Select Location" value={null} />
        {flightsData.flights.map((flight) => {
          return(
            <Picker.Item 
            key={flight.id}
            label={`${flight.cityName}, ${flight.countryName}`} 
            value={flight.id} />
            );
          })}
      </Picker>
    </View>
  );
};