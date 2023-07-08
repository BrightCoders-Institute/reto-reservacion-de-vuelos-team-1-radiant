import React, { useState } from 'react';
import { View } from 'react-native';
import { SubTitle } from '../components/SubTitle';
import { StackScreenProps } from '@react-navigation/stack';
import styles from '../appTheme/AppTheme';
import FlightInfo from '../components/FlightInfo';
import { OriginDropDown } from '../components/OriginDropDown';
import { ButtonPrimary } from '../components/ButtonPrimary';
import Icon from 'react-native-vector-icons/Ionicons';



interface Props extends StackScreenProps<any, any> { }

export const FlightDestinationScreen = ({ navigation, route }: Props) => {

  const [selectedFlightOrigin, setSelectedFlightOrigin] = useState(route.params?.selectedFlight || null);
  const [selectedFlightDestination, setSelectedFlightDestination] = useState(null);

  const handleSelectFlightDestination = (flight: any) => {
    setSelectedFlightDestination(flight);
  };


  return (
    <View style={styles.whereAreYouContainer}>
      <View style={styles.flightBookingInfo}>
        <View style={styles.flightInfoContainer}>

          <View style={styles.flightInfoTextContainer}>
            <FlightInfo selectedFlight={selectedFlightOrigin} />
          </View>

          <View style={styles.flightInfoIconContainer}>
            <Icon name={'airplane'} size={25} color={'#2D7BDD'} />
          </View>

          {selectedFlightDestination ?
            <View style={styles.flightInfoTextContainer}>
              <FlightInfo selectedFlight={selectedFlightDestination} alignRight={true} />
            </View>
            : null}

        </View>
      </View>

      <View style={styles.selectionBookingField}>
        <SubTitle text="Where will you be flying to?" />
        <OriginDropDown
          onSelectFlight={handleSelectFlightDestination} />
      </View>

      <View style={styles.bookingScreensButton}>
        <ButtonPrimary
          title="Next"
          isValid={selectedFlightDestination ? true : false}
          disabled={selectedFlightDestination ? false : true}
          onPress={() => navigation.navigate('WhereAreYouScreen')} />
      </View>
    </View>
  );
};

