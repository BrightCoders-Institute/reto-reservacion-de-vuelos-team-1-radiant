import React from 'react';
import { Text, View } from 'react-native';
import { SubTitleProps } from '../../interfaces/interfaces';
import styles from './styles';

export const SubTitle = ({ text } : SubTitleProps) => {
  return (
    <View style={styles.containerSubTitle}>
        <Text style={styles.subTitle}>{ text }</Text>
    </View>
  )
}