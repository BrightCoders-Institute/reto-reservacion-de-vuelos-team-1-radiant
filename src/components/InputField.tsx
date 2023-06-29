import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { InputProps } from '../interfaces/interfaces';

const InputField = ({ label, value, onChangeText, error, secureTextEntry }: InputProps) => {
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
                {error ? (<Text style={styles.error}>{error}</Text>) : null}
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
        marginRight: 15,
        marginLeft: 14,
        marginBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
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
        width: 360,
        height: 47,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 8,
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
