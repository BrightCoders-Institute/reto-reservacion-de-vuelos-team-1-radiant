import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ButtonProps } from '../interfaces/interfaces';


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

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '95%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        elevation: 4,
    },
    primaryButtonValid: {
        backgroundColor: '#2774D5',
    },
    primaryButtonInvalid: {
        backgroundColor: '#A0A0A0',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonImage: {
        position: 'absolute',
        left: '10%',
        width: 25,
        height: 25,
    },
});
