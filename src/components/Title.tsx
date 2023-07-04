import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TitleProps } from '../interfaces/interfaces';
import styles from '../appTheme/AppTheme';

const Title = ({ children }: TitleProps) => (
    <Text style={styles.title}>{children}</Text>
);



export default Title;
