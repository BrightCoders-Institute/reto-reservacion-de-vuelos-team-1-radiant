import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {CheckboxProps} from '../interfaces/interfaces';

const CustomCheckbox = ({
  value,
  onValueChange,
  label,
  error,
}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onValueChange(!value);
  };

  return (
    <TouchableOpacity style={styles.checkbox} onPress={handleCheckboxChange}>
      <View
        style={[
          styles.checkButton,
          value ? styles.checkboxSelected : styles.checkboxUnselected,
        ]}>
        {value && (
          <Image
            style={styles.checkIcon}
            source={require('../assets/check.png')}
          />
        )}
      </View>
      <Text>{label}</Text>
      {error ? <Text style={styles.errorCheckBox}>{error}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkButton: {
    borderWidth: 1,
    width: 18,
    height: 18,
    marginRight: '4%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  errorCheckBox: {
    color: 'red',
    fontSize: 13,
    marginLeft: 10,
    width: 'auto',
  },
});

export default CustomCheckbox;
