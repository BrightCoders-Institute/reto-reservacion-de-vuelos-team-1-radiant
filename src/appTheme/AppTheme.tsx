import { StyleSheet } from 'react-native';
import { rest } from '../helpers/DataDestinyDimensions';

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
  finishBookingField: {
    flex: 1,
    maxHeight: rest,
    marginBottom: '-40%',
  },
  bookingScreensButton: {
    marginBottom: '10%',
  },
  whereAreYouContainer: {
    flex: 1,
  },
  requestContainer: {
    flex: 1,
    marginTop: '50%',
  },
  buttonFinishContainer: {
    marginTop: '13%',
  },
  myFlightsContainer: {
    flex: 1,
    position: 'relative',
    marginTop: 10,
  },
  addFlightsButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    right: '50%',
    marginBottom: 20,
    zIndex: 1,
  },
  headerMyFlightsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 26,
    color: '#2D7BDD',
    fontWeight: 'bold',
    marginLeft: '20%',
    textAlign: 'center',
  },
});

export default styles;
