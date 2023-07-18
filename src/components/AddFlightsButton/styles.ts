import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({

    buttonContainer: {
        zIndex: 1,
        alignSelf: 'center',
        borderRadius: 35,
        marginTop: 10,
        width: 70,
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 4,
    },
    primaryButtonValid: {
        backgroundColor: '#2774D5',
    },
    primaryButtonInvalid: {
        backgroundColor: '#A0A0A0',
    },
    buttonText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    buttonImage: {
        position: 'absolute',
        left: '10%',
        width: 25,
        height: 25,
    },
})