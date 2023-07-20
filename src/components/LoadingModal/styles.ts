import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#21252b',
    padding: 20,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    transform: [{scale: 2.5}],
    marginVertical: 25,
  },
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  signUpModalText: {
    textAlign: 'center',
    marginTop: 20,
  },
  signUpModalTextSuccess: {
    color: '#2D7BDD',
  },
  signUpModalTextError: {
    color: 'red',
  },
});

export default styles;