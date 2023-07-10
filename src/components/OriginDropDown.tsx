import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../appTheme/AppTheme';
import flightsData from '../data/flightsData.json';
import { SelectFlightsProps } from '../interfaces/interfaces';


export const OriginDropDown = ({ onSelectFlight }: SelectFlightsProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleValueChange = (value: any) => {
    setSelectedOption(value);

    const selectedFlight = flightsData.flights.find((flight) => flight.id === value);
    onSelectFlight(selectedFlight);
  };

  return (
    <View style={styles.pickerStyle}>
      <Picker
        selectedValue={selectedOption}
        placeholder="Select Location"
        onValueChange={handleValueChange}
      >
        <Picker.Item style={styles.pickerItemStyle} label="Select Location" value={null} />
        {flightsData.flights.map((flight) => {
          return (
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
