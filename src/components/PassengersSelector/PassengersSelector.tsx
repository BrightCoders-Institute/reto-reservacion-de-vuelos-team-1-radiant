import { View } from 'react-native';
import { Picker } from 'react-native-wheel-pick';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';
import { SelectPassengerProps } from '../../interfaces/interfaces';

export const PassengersSelector = ({ onSelectPassengers }: SelectPassengerProps) => {
    const [selectedPassenger, setSelectedPassenger] = useState(1);

    const onPickerSelect = (index: number) => {
      setSelectedPassenger(index);
      onSelectPassengers(index);
    };
    
  return (
    <View style={styles.container}>
      <View>
        <Picker
          style={styles.scroll}
          textSize={35}
          selectTextColor="black"
          isShowSelectBackground={false}
          isShowSelectLine={false}
          selectedValue={selectedPassenger}
          onValueChange={(index: number) => onPickerSelect(index)}
          pickerData={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
          ]}
        />
      </View>
      <View>
      <Icon
          style={styles.arrowLeft}
          name="caret-forward"
          size={30}
          color="#6170F7"
        />
        <Icon
          style={styles.arrowRight}
          name="caret-back"
          size={30}
          color="#6170F7"
        />      
      </View>
    </View>
  );
};
