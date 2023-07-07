import React, {useState} from 'react'
import { View, Dimensions} from 'react-native'
import { OriginDropDown } from '../components/OriginDropDown'
import { ButtonPrimary } from '../components/ButtonPrimary'
import styles from '../appTheme/AppTheme';
import FlightInfo from '../components/FlightInfo';
import { SubTitle } from '../components/SubTitle';
import Icon from 'react-native-vector-icons/Ionicons';


export const WhereAreYouScreen = ({navigation} : any) => {

  const screenHeight = Dimensions.get('window').height;
  const flightInfoHeight = 0.3 * screenHeight;
  const rest = screenHeight - flightInfoHeight;

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [isValid, setIsValid] = useState(false)


  const handleSelectFlight = (flight: any) => { 
    setSelectedFlight(flight);
  }

  const handleNext = () => {
  };

  
  return (
    <View style={styles.whereAreYouContainer}>
      <View style={{flex: 0.3, maxHeight: flightInfoHeight}}>
        <View>

        {selectedFlight ? <FlightInfo selectedFlight={selectedFlight} /> 
          : null}

        {selectedFlight ? <View style={styles.flightInfoIconContainer}>
          <Icon name={'airplane'} size={25} color={'#2D7BDD'} />
        </View>
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
        <ButtonPrimary title="Next" onPress={() => navigation.navigate('FlightDestinationScreen')}/>
      </View>
    </View>
  );
};
