import { StyleSheet } from 'react-native';
import { flightInfoHeight, rest } from '../helpers/DataDestinyDimensions';


const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginTop: 30,
  },
  inputFocused: {
    borderColor: '#2774D5',
  },
  passwordIconContainer: {
    position: 'absolute',
    left: '90%',
    bottom: '35%',
  },
  eye: {
    width: 25,
    height: 25,
  },
  desactivedEye: {
    tintColor: '#A0A0A0',
  },
  activeEye: {
    tintColor: '#2774D5',
  },
  mainCheckboxContainer: {
    marginVertical: 15,
    fontSize: 14,
  },
  textOr: {
    marginLeft: '50%',
    marginTop: 5,
    marginBottom: 5,
  },
  googleIconContainer: {
    left: '10%',
    bottom: '43%',
  },
  google: {
    width: 25,
    height: 25,
  },
  textLogIn: {
    marginTop: 40,
    fontSize: 16,
    alignSelf: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#2774D5',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginLeft: 10,
  },

  flightBookingInfo: {
    flex: 0.3,
    maxHeight: flightInfoHeight,
  },
  selectionBookingField: {
    flex: 0.7,
    maxHeight: rest,
  },

  bookingScreensButton: {
    marginBottom: '15%',
  },

  whereAreYouContainer: {
    flex: 1,
  },
  flightInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginBottom: 10,
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
    transform: [{ translateX: -12.5 }, { translateY: -12.5 }], 
  },
});

export default styles;
