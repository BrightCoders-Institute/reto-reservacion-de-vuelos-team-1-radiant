import React, { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import { InputProps } from '../../interfaces/interfaces';
import { styles } from './styles';


const InputField = ({ label, value, onChangeText, error, secureTextEntry }: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasContent = value.length > 0;

    const handleFocus = () => {
        setIsFocused(true);
    };

    const inputStyles = [
        styles.input,
        isFocused || hasContent ? styles.inputFieldFocused : null,
    ];

    const handleBlur = () => {
        setIsFocused(false);
    };
    return (
        <View style={styles.inputContainer}>
            <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>{label}</Text>
                {error ? (<Text style={styles.errorInputField}>{error}</Text>) : null}
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


export default InputField;
