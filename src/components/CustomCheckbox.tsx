import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { CheckboxProps } from '../interfaces/interfaces';

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

const styles = StyleSheet.create({
    checkButton: {
        borderWidth: 1,
        width: 18,
        height: 18,
        marginRight: '2.5%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkbox: {
        flexDirection: 'row',
        marginBottom: 5,
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
    checkboxContainer: {
        flexDirection: 'column',
        marginBottom: 10,
    },
    errorCheckBox: {
        color: 'red',
        fontSize: 13,
    },
});

export default CustomCheckbox;
