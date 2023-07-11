import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      inputLabelContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
      },
      inputLabel: {
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
      },
      input: {
        width: '100%',
        height: 50,
        fontSize: 20,
        fontWeight: 'bold',
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        paddingTop: 10,
        marginTop: 2,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
        backgroundColor: '#fff',
      },
      inputFieldFocused: {
        borderColor: '#2774D5',
      },
      errorInputField: {
        color: 'red',
        fontSize: 15,
        marginLeft: 10,
      },
})