import React, {useState} from 'react'
import { View } from 'react-native'
import { OriginDropDown } from '../components/OriginDropDown'
import { ButtonPrimary } from '../components/ButtonPrimary'
import styles from '../appTheme/AppTheme';
import FlightInfo from '../components/FlightInfo';
import { SubTitle } from '../components/SubTitle';


export const WhereAreYouScreen = () => {
  return (
    <View style={styles.container}>
      <FlightInfo />
      <SubTitle text='Where are you now?'/>
        <OriginDropDown
          // selectedCity={selectedCity}
          // setSelectedCity={setSelectedCity}
        />
        <ButtonPrimary title="Next" />
    </View>
  );
};
