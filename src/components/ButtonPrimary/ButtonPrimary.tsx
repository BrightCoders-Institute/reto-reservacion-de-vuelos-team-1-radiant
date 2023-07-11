import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../../interfaces/interfaces';
import { styles } from './styles';



export const ButtonPrimary = ({ title, onPress, imgSource, isValid, disabled }: ButtonProps) => {
    return (
        <TouchableOpacity
            disabled={disabled}
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

