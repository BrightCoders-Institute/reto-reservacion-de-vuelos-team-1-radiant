import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {InputProps} from '../interfaces/interfaces';

const Input = ({label, value, onChangeText}: InputProps) => (
  <View>
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
});

export default Input;
