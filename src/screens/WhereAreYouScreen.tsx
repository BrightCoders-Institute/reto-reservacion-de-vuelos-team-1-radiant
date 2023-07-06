import React, {useState} from 'react'
import { View, Dimensions} from 'react-native'
import { OriginDropDown } from '../components/OriginDropDown'
import { ButtonPrimary } from '../components/ButtonPrimary'
import styles from '../appTheme/AppTheme';
import FlightInfo from '../components/FlightInfo';
import { SubTitle } from '../components/SubTitle';


export const WhereAreYouScreen = () => {
  const screenHeight = Dimensions.get('window').height;
  const flightInfoHeight = 0.3 * screenHeight;
  const rest = screenHeight - flightInfoHeight;

  return (
    <View style={styles.whereAreYouContainer} >
     
      <View style={{flex: 0.3, maxHeight: flightInfoHeight}}>
       <FlightInfo />
      </View>

      <View style={{flex: 0.7, maxHeight: rest}}>
        <SubTitle text='Where are you now?'/>
        <OriginDropDown/>
      </View>

      <View style={{ marginBottom: '15%'}} >
        <ButtonPrimary title="Next" />
      </View>

    </View>
  );
};
