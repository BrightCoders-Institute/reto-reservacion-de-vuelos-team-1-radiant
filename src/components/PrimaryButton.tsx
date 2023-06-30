import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {PrimaryButtonProps} from '../interfaces/interfaces';

const windowWidth = Dimensions.get('window').width;

const PrimaryButton = ({title, onPress, isValid}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isValid ? styles.primaryButtonValid : styles.primaryButtonInvalid,
      ]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    width: windowWidth * 0.9,
    borderRadius: 10,
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonInvalid: {
    backgroundColor: '#A0A0A0',
  },
  primaryButtonValid: {
    backgroundColor: '#2774D5',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System',
  },
});

export default PrimaryButton;
