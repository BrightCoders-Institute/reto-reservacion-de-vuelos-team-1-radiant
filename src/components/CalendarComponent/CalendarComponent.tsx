import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
// import styles from '../appTheme/AppTheme';

export const CalendarComponent = onDateSelect => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date: any) => {
    setSelectedDate(date.dateString);
    onDateSelect(date.dateString);
  };

  return (
    <View>
      <Calendar
        style={{height: '50%', width: '100%'}}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#2D7BDD',
          },
        }}
      />
    </View>
  );
};
