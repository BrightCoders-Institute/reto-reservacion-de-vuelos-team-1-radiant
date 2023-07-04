import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  // SIGN UP STYLES
  container: {
    flex: 0,
    marginTop: 30,
  },
  inputFocused: {
    borderColor: '#2774D5',
  },
  passwordIconContainer: {
    position: 'absolute',
    left: '90%',
    bottom: '35%',
  },
  eye: {
    width: 25,
    height: 25,
  },
  desactivedEye: {
    tintColor: '#A0A0A0',
  },
  activeEye: {
    tintColor: '#2774D5',
  },
  mainCheckboxContainer: {
    // flexDirection: 'column',
    marginVertical: 15,
    fontSize: 14,
  },
  textOr: {
    marginLeft: '50%',
    marginTop: 5,
    marginBottom: 5,
  },
  googleIconContainer: {
    left: '10%',
    bottom: '43%',
  },
  google: {
    width: 25,
    height: 25,
  },
  textLogIn: {
    marginTop: 40,
    fontSize: 16,
    alignSelf: 'center',
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#2774D5',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginLeft: 10,
  },

  // BUTTON PRIMARY STYLES
  buttonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '95%',
    height: 50,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonImage: {
    position: 'absolute',
    left: '10%',
    width: 25,
    height: 25,
  },

  //CUSTOM CHECKBOX STYLES
  checkButton: {
    borderWidth: 1,
    width: 18,
    height: 18,
    marginRight: '2.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  checkboxSelected: {
    backgroundColor: '#2D7BDD',
  },
  checkIcon: {
    width: 12,
    height: 12,
    tintColor: 'white',
  },
  checkboxUnselected: {
    backgroundColor: 'transparent',
  },
  checkboxContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  errorCheckBox: {
    color: 'red',
    fontSize: 13,
  },

  //INPUTFIELD STYLES
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
  //LOADING MODAL STYLES
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#21252b',
    padding: 20,
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  successContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    transform: [{scale: 2.5}],
    marginVertical: 25,
  },
  iconContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 15,
  },
  signUpModalText: {
    color: '#2D7BDD',
    textAlign: 'center',
    marginTop: 20,
  },

  //TITLE STYLES
  title: {
    fontSize: 26,
    color: '#2D7BDD',
    fontWeight: 'bold',
    marginBottom: 30,
  },
});

export default styles;