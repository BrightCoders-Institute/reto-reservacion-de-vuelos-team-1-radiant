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
import { StackScreenProps } from '@react-navigation/stack';
import styles from '../appTheme/AppTheme';

interface Props extends StackScreenProps<any, any>{};

const SignUpScreen = ({ navigation }: Props) => {
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
      <Text >
        Use 8 or more characthers with a mix of letters, numbers, and symbols.
      </Text>
      <View style={styles.mainCheckboxContainer}>
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
        Already have an account? <Text style={styles.underline} onPress={ () => navigation.navigate('LogInScreen') }>Log in</Text>
      </Text>
      <LoadingModal isLoading={isLoading} isRegistered={isRegistered} />
    </KeyboardAvoidingView>
  );
};


export default SignUpScreen;
