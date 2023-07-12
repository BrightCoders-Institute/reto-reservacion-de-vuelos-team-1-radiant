import {StyleSheet} from 'react-native';
import {rest} from '../helpers/DataDestinyDimensions';

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

  selectionBookingField: {
    flex: 1,
    maxHeight: rest,
  },

  bookingScreensButton: {
    marginBottom: '10%',
  },

  whereAreYouContainer: {
    flex: 1,
  },
});

export default styles;
