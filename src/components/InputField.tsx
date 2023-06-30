import React, {useState} from 'react';
import {TextInput, StyleSheet, View, Text, Dimensions} from 'react-native';
import {InputProps} from '../interfaces/interfaces';

const windowWidth = Dimensions.get('window').width;

const InputField = ({
  label,
  value,
  onChangeText,
  error,
  secureTextEntry,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasContent = value.length > 0;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const inputStyles = [
    styles.input,
    isFocused || hasContent ? styles.inputFocused : null,
  ];

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View>
      <View style={styles.inputLabelContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyles}
        secureTextEntry={secureTextEntry}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    marginLeft: '5%',
    width: windowWidth * 0.9,
  },
  inputLabelContainer: {
    flexDirection: 'row',
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    position: 'relative',
    width: windowWidth * 0.9,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 10,
    marginTop: 2,
    marginBottom: 10,
  },
  inputFocused: {
    borderColor: '#2774D5',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginLeft: 10,
  },
});

export default InputField;
