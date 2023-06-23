import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageSourcePropType,
  KeyboardAvoidingView,
} from 'react-native';

import LoadingModal from '../components/LoadingModal';
import InputField from '../components/InputField';
import Title from '../components/Title';
import CustomCheckbox from '../components/CustomCheckbox';
import { ButtonPrimary } from '../components/ButtonPrimary';
import { FIREBASE_AUTH } from '../database/firebaseconfig';
import { createUserWithEmailAndPassword } from '@firebase/auth';


const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const auth = FIREBASE_AUTH;

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

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&^#])[A-Za-z\d@$!%*?&^#]{8,}$/;
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
      agree1Validation());
  }, [firstName, email, password, agree1]);

  const handleSignUp = async () => {

    setIsLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
    } finally {
      setIsLoading(false);
    }

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
        agree1Validation()
      );
    }
  }, [isSubmitted, firstName, email, password, agree1]);


  const handleGoogleSignUp = () => {

  };

  const googleLogo: ImageSourcePropType = require('../assets/google.png');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Title>Sign Up</Title>
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
      <View>
        <InputField
          label="Password *"
          value={password}
          onChangeText={text => setPassword(text)}
          error={isSubmitted && errorPassword}
          secureTextEntry={secureTextEntry}
        />
        <TouchableOpacity style={styles.passwordIconContainer} onPress={togglePasswordVisibility}>
          <Image
            style={[styles.eye, secureTextEntry ? styles.desactivedEye : styles.activeEye]}
            source={require('../assets/ojo.png')}
          />
        </TouchableOpacity>
      </View>
      <Text>
        Use 8 or more characthers with a mix of letters, numbers, and symbols.
      </Text>
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

      <ButtonPrimary title="Sign Up" onPress={handleSignUp} isValid={isValid} />
      <Text style={styles.textOr}>or</Text>
      <ButtonPrimary title="Sign Up With Google" imgSource={googleLogo} onPress={handleGoogleSignUp} isValid={true} />
      <Text style={styles.textLogIn}>
        Already have an account? <Text style={styles.underline}>Log in</Text>
      </Text>
      <LoadingModal isLoading={isLoading} isRegistered={isRegistered} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
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
  checkboxContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 20,
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
});

export default SignUpScreen;
