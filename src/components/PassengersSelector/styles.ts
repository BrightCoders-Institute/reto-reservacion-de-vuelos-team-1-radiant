import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginBottom: 130,
      marginHorizontal : 70,
    },
    scroll: {
      backgroundColor: '#f2f2f2',
      height: 215,
      top: 0,
    },
    containerArrow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    arrowLeft: {
      flex: 1,
      position: 'absolute',
      top: -125,
      zIndex: 1,
      left: 14,
    },
    arrowRight: {
      flex: 1,
      position: 'absolute',
      top: -125,
      zIndex: 1,
      left: 190,
    },
  });
  