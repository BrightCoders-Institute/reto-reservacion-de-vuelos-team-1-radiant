import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TitleProps } from '../interfaces/interfaces';

const Title = ({ children }: TitleProps) => (
    <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
    title: {
        fontSize: 26,
        color: '#2D7BDD',
        fontWeight: 'bold',
        marginBottom: 30,
    },
});

export default Title;
