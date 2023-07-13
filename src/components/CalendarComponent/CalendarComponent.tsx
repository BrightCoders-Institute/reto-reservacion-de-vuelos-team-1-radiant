import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import { styles } from './styles';
import moment from 'moment';
import { CalendarComponentProps } from '../../interfaces/interfaces';

export const CalendarComponent = ({onDateSelect }: CalendarComponentProps) => {
   const [selectedDate, setSelectedDate] = useState('');

   const handleDateSelect = (date: any) => {
    const selectedDateString = date.dateString;
    setSelectedDate(selectedDateString);
    onDateSelect(selectedDateString);
    console.log(date);
  };

  const currentDate = moment().format('YYYY-MM-DD');

  return (
    <View>
      <Calendar
        style={styles.calendarContainer}
        theme={{
          monthTextColor: 'black',
          textMonthFontWeight: 'bold',
          textMonthFontSize: 18,
          textDayFontWeight: '400', 
          textSectionTitleColor: 'black',
          textDayHeaderFontWeight: '800',

        }}
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: '#2D7BDD',
          },
        }}
        minDate={currentDate}
      />
    </View>
  );
};
