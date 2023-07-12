import {StyleSheet} from 'react-native';
import {flightInfoHeight} from '../../helpers/DataDestinyDimensions';

const styles = StyleSheet.create({
  flightBookingInfo: {
    flex: 0.2,
    maxHeight: flightInfoHeight,
  },
  flightInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  flightInfoTextContainer: {
    width: '50%',
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  flightInfoIconContainer: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: [{translateX: -12.5}, {translateY: -12.5}],
  },
  bookingDatePassengersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
