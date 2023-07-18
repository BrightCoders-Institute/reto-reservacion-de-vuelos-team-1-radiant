import { StyleSheet } from 'react-native';
import { flightInfoHeight } from '../../helpers/DataDestinyDimensions';

const styles = StyleSheet.create({
  flightBookingInfo: {
    flex: 0.2,
    maxHeight: flightInfoHeight,
  },
  bookingCardOnMyFlights: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  flightInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  flightInfoTextContainer: {
    width: '50%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  flightInfoIconContainer: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }],
  },
  bookingDatePassengersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  bookingCardDateText: {
    color: '#000',
    fontWeight: '600',
  },
  bookingCardPassengersText: {
    color: '#000',
    fontWeight: '600',
  },
});

export default styles;
