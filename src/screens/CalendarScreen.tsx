import React, {useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {View} from 'react-native';
import {ButtonPrimary} from '../components/ButtonPrimary/ButtonPrimary';
import styles from '../appTheme/AppTheme';
import {SubTitle} from '../components/SubTitle/SubTitle';
import BookingCard from '../components/BookingCard/BookingCard';
import {CalendarComponent} from '../components/CalendarComponent/CalendarComponent';

interface Props extends StackScreenProps<any, any> {}

export const CalendarScreen = ({navigation, route}: Props) => {
  const [selectedFlightOrigin] = useState(
    route.params?.selectedFlightOrigin || null,
  );
  const [selectedFlightDestination] = useState(
    route.params?.selectedFlightDestination || null,
  );
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <View style={styles.whereAreYouContainer}>
      <BookingCard
        selectedFlightOrigin={selectedFlightOrigin}
        selectedFlightDestination={selectedFlightDestination}
        date={selectedDate}
        passengers={null}
      />

      <View style={styles.selectionBookingField}>
        <SubTitle text="Select date" />
        <CalendarComponent onDateSelect={handleDateSelect} />
      </View>

      <View style={styles.bookingScreensButton}>
        <ButtonPrimary
          title="Next"
          isValid={selectedDate ? true : false}
          disabled={selectedDate ? false : true}
          onPress={() => navigation.navigate('WhereAreYouScreen')}
        />
      </View>
    </View>
  );
};
