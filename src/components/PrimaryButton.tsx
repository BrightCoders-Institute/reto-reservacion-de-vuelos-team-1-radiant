import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PrimaryButtonProps } from '../interfaces/interfaces';

const PrimaryButton = ({ title, onPress, isValid }: PrimaryButtonProps) => {
    return (
        <TouchableOpacity style={[
            styles.buttonContainer, isValid ? styles.primaryButtonValid : styles.primaryButtonInvalid]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 360,
        height: 46,
    },
    primaryButtonInvalid: {
        backgroundColor: '#A0A0A0',
    },
    primaryButtonValid: {
        backgroundColor: '#2774D5',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
});

export default PrimaryButton;
