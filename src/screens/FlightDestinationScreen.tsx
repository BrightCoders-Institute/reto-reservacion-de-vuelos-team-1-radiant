import React, { useState } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { SubTitle } from '../components/SubTitle'
import { StackScreenProps } from '@react-navigation/stack'
import styles from '../appTheme/AppTheme'
import FlightInfo from '../components/FlightInfo'
import { OriginDropDown } from '../components/OriginDropDown'
import { ButtonPrimary } from '../components/ButtonPrimary'

interface Props extends StackScreenProps<any, any>{};

export const FlightDestinationScreen = ({navigation} : any) => {
  const screenHeight = Dimensions.get('window').height;
  const flightInfoHeight = 0.3 * screenHeight;
  const rest = screenHeight - flightInfoHeight;

  const [selectedFlight, setSelectedFlight] = useState(null);


  const handleSelectFlight = (flight: any) => { 
    setSelectedFlight(flight);
  }

  
  return (
    <View style={styles.whereAreYouContainer}>
      <View style={{flex: 0.3, maxHeight: flightInfoHeight}}>
        <View>

        {selectedFlight ? <FlightInfo selectedFlight={selectedFlight} /> 
          : null}
        <View>

        </View>

        </View>
      </View>

      

      <View style={{flex: 0.7, maxHeight: rest}}>
        <SubTitle text="Where are you now?" /> 
        <OriginDropDown onSelectFlight={handleSelectFlight} />
      </View>

      {
      /* <View style={{flex: 0.7, maxHeight: rest}}>
        <SubTitle text="Where will you be flying to?" />
      </View> */}

      <View style={{marginBottom: '15%'}}>
        <ButtonPrimary title="Next" onPress={() => navigation.navigate('WhereAreYouScreen')}/>
      </View>
    </View>
  );
}
