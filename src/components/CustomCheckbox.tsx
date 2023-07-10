import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CheckboxProps } from '../interfaces/interfaces';
import styles from '../appTheme/AppTheme';

const CustomCheckbox = ({ value, onValueChange, label, error }: CheckboxProps) => {
    const handleCheckboxChange = () => {
        onValueChange(!value);
    };

    return (
        <View style={styles.checkboxContainer}>
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
            </TouchableOpacity>
            {error ? (<Text style={styles.errorCheckBox}>{error}</Text>) : null}
        </View>
    );
};


export default CustomCheckbox;
