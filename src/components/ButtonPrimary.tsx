import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../interfaces/interfaces';
import styles from '../appTheme/AppTheme';


export const ButtonPrimary = ({ title, onPress, imgSource, isValid }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                isValid ? styles.primaryButtonValid : styles.primaryButtonInvalid,
            ]}
            onPress={onPress}>
            {imgSource && <Image source={imgSource} style={styles.buttonImage} />}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

