import React from 'react';
import { Text, } from 'react-native';
import { styles } from './styles';
import { TitleProps } from '../../interfaces/interfaces';


const Title = ({ children }: TitleProps) => (
    <Text style={styles.title}>{children}</Text>
);



export default Title;
