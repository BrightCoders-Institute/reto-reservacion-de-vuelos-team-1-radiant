import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';
import LoadingModal from '../components/LoadingModal';
import InputField from '../components/InputField';
import Title from '../components/Title';
import CustomCheckbox from '../components/CustomCheckbox';

const windowWidth = Dimensions.get('window').width;

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  //States for error messages
  const [errorFirstName, setErrorFirstName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorAgree1, setErrorAgree1] = useState('');

  //State to show password
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  //Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const eyeIconStyles = [styles.eye, secureTextEntry ? styles.activeEye : null];

  //Validation Function for each field
  const firstNameValidation = () => {
    if (!firstName) {
      setErrorFirstName('First Name is required');
      return false;
    } else {
      setErrorFirstName('');
      return true;
    }
  };

  const emailValidation = () => {
    if (!email) {
      setErrorEmail('Email is required');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrorEmail('Please enter a valid email address');
      return false;
    }

    setErrorEmail('');
    return true;
  };

  const passwordValidation = () => {
    if (!password) {
      setErrorPassword('Password is required');
      return false;
    }

    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
    if (!passwordPattern.test(password)) {
      setErrorPassword('Password format invalid');
      return false;
    }
    //Rest of password validations

    setErrorPassword('');
    return true;
  };

  const agree1Validation = () => {
    if (!agree1) {
      setErrorAgree1('You must agree to the Terms and Privacy Policy');
      return false;
    }

    setErrorAgree1('');
    return true;
  };

  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsValid(
      firstNameValidation() &&
        emailValidation() &&
        passwordValidation() &&
        agree1Validation(),
    );
  }, [firstName, email, password, agree1]);

  const handleSignUp = () => {
    const isValidFields =
      firstNameValidation() &&
      emailValidation() &&
      passwordValidation() &&
      agree1Validation();

    setIsSubmitted(true);
    setIsValid(isValidFields);

    if (isValidFields) {
      //Add to database
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        setIsRegistered(true);
        setTimeout(() => {
          setIsRegistered(false);
        }, 3000);
      }, 3000);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      setIsValid(
        firstNameValidation() &&
          emailValidation() &&
          passwordValidation() &&
          agree1Validation(),
      );
    }
  }, [isSubmitted, firstName, email, password, agree1]);

  const handleGoogleSignUp = () => {};

  return (
    <View style={styles.container}>
      <Title>Sign Up</Title>
      <View style={styles.inputContainer}>
        <InputField
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
          error={isSubmitted && errorFirstName}
          secureTextEntry={false}
        />
        <InputField
          label="Email *"
          value={email}
          onChangeText={text => setEmail(text)}
          error={isSubmitted && errorEmail}
          secureTextEntry={false}
        />
        <View style={styles.inputContainerWithEye}>
          <InputField
            label="Password *"
            value={password}
            onChangeText={text => setPassword(text)}
            error={isSubmitted && errorPassword}
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.passwordIconContainer}
            onPress={togglePasswordVisibility}>
            <Image
              style={eyeIconStyles}
              source={require('../assets/ojo.png')}
            />
          </TouchableOpacity>
        </View>
        <Text>
          Use 8 or more characthers with a mix of letters, numbers, and symbols.
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          value={agree1}
          onValueChange={value => setAgree1(value)}
          label="I agree to the Terms and Privacy Policy"
          error={isSubmitted && errorAgree1}
        />
        <CustomCheckbox
          value={agree2}
          onValueChange={value => setAgree2(value)}
          label="Suscribe for select product updates"
          error=""
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          title="Sign Up"
          onPress={handleSignUp}
          isValid={isValid}
        />
        <Text style={styles.textOr}>or</Text>
        <PrimaryButton
          title="Sign Up with Google"
          onPress={handleGoogleSignUp}
          isValid={isValid}
        />
        <View style={styles.googleIconContainer}>
          <Image
            style={styles.google}
            source={require('../assets/google.png')}
          />
        </View>
      </View>
      <View>
        <Text style={styles.textLogIn}>
          Already have an account? <Text style={styles.underline}>Log in</Text>
        </Text>
      </View>
      <LoadingModal isLoading={isLoading} isRegistered={isRegistered} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 10,
    marginLeft: '5%',
    width: windowWidth * 0.9,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputContainerWithEye: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: windowWidth * 0.9,
  },

  input: {
    position: 'relative',
    width: windowWidth * 0.9,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingTop: 10,
    marginTop: 2,
    marginBottom: 10,
  },
  inputFocused: {
    borderColor: '#2774D5',
  },
  passwordIconContainer: {
    position: 'absolute',
    left: '90%',
    bottom: '25%',
  },
  eye: {
    width: 25,
    height: 25,
    tintColor: '#A0A0A0',
  },
  activeEye: {
    tintColor: '#2774D5',
  },
  checkboxContainer: {
    marginTop: 20,
    fontSize: 14,
    marginLeft: '5%',
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: '5%',
    height: '20%',
    width: windowWidth * 0.9,
  },
  button: {
    position: 'relative',
    width: windowWidth * 0.9,
    borderRadius: 10,
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textOr: {
    marginLeft: '50%',
    marginTop: 5,
    marginBottom: 5,
  },
  googleIconContainer: {
    left: '10%',
    bottom: '25%',
  },
  google: {
    width: 25,
    height: 25,
  },
  textLogIn: {
    fontSize: 16,
    marginLeft: '25%',
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
});

export default SignUpScreen;
