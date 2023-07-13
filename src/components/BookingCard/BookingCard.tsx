import React from 'react-native';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FlightInfo from '../FlightInfo/FlightInfo';
import styles from './styles';
import ConditionalRender from '../ConditionalRendering/ConditionalRendering';
import { formatDate } from '../../helpers/FormatDate';

const BookingCard = ({
  selectedFlightOrigin,
  selectedFlightDestination,
  date,
  passengers,
}: any) => {

  return (
    <View style={styles.flightBookingInfo}>
      <View style={styles.flightInfoContainer}>
        <ConditionalRender condition={selectedFlightOrigin}>
          <View style={styles.flightInfoTextContainer}>
            <FlightInfo selectedFlight={selectedFlightOrigin} />
          </View>

          <View style={styles.flightInfoIconContainer}>
            <Icon name={'airplane'} size={25} color={'#2D7BDD'} />
          </View>
        </ConditionalRender>

        <ConditionalRender condition={selectedFlightDestination}>
          <View style={styles.flightInfoTextContainer}>
            <FlightInfo
              selectedFlight={selectedFlightDestination}
              alignRight={true}
            />
          </View>
        </ConditionalRender>
      </View>

      <View style={styles.bookingDatePassengersContainer}>
        <ConditionalRender condition={date}>
          <Text style={styles.bookingCardDateText}>{formatDate(date)}</Text>
        </ConditionalRender>

        <ConditionalRender condition={passengers}>
          <Text style={styles.bookingCardPassengersText}>{passengers > 1 ? `${passengers} passengers` : `${passengers} passenger`}</Text>
        </ConditionalRender>
      </View>
    </View>
  );
};

export default BookingCard;
