import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkButton: {
    borderWidth: 1,
    width: 18,
    height: 18,
    marginRight: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  checkboxSelected: {
    backgroundColor: '#2D7BDD',
  },
  checkIcon: {
    width: 12,
    height: 12,
    tintColor: 'white',
  },
  checkboxUnselected: {
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  errorCheckBox: {
    color: 'red',
    fontSize: 13,
  },
});

export default styles;
