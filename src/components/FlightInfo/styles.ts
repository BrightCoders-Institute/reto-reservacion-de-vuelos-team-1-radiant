import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({

    flightinfoMainContainer: {},

    flightInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      marginBottom: 10,
    },
    alignRight: {
      alignItems: 'flex-end',
    },
    flightInfoTextContainer: {
      width: '50%',
      borderStyle: 'solid',
      borderBottomWidth: 0.5,
      borderBottomColor: 'grey',
    },
    flightInfoIconContainer: {
      position: 'absolute',
      top: '60%',
      left: '50%',
      transform: [{ translateX: -12.5 }, { translateY: -12.5 }], //Move Y
    },
    flightInfoAbbrev: {
      fontWeight: '700',
      fontSize: 25,
      color: '#000',
    },
    flightInfoCountry: {
      marginBottom: 5,
    },
    passengerInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    passengerInfoText: {
      color: '#000',
    },
})