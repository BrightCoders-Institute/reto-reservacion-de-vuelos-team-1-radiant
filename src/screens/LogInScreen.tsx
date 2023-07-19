import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Image, ImageSourcePropType, KeyboardAvoidingView } from 'react-native';
import Title from '../components/Title/Title';
import InputField from '../components/InputField/InputField';
import { ButtonPrimary } from '../components/ButtonPrimary/ButtonPrimary';
import styles from '../appTheme/AppTheme';
import { FIREBASE_AUTH } from '../database/firebaseconfig';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { StackScreenProps } from '@react-navigation/stack';
import { emailValidation, passwordValidation } from '../helpers/formValidations';
import LoadingModal from '../components/LoadingModal/LoadingModal';


interface Props extends StackScreenProps<any, any> { }
export const LogInScreen = ({ navigation }: Props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;

  //States for error messages
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  //State to show password
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  //Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  //Validation Function for each field

  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

    const [authSuccess, setAuthSuccess] = useState(true);

  useEffect(() => {
    setIsValid(
      emailValidation(email, setErrorEmail) &&
      passwordValidation(password, setErrorPassword)
    );
  }, [email, password]);

  const handleSignIn = async () => {

    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert('Sign in failed: ' + error.message);
      setAuthSuccess(false);
    } finally {
      setIsLoading(false);
    }

    const isValidFields =
      emailValidation(email, setErrorEmail) &&
      passwordValidation(password, setErrorPassword);

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
          navigation.navigate('MyFlightsScreen');
        }, 1500);
      }, 1500);
    }

  };

  useEffect(() => {
    if (isSubmitted) {
      setIsValid(
        emailValidation(email, setErrorEmail) &&
        passwordValidation(password, setErrorPassword)
      );
    }
  }, [isSubmitted, email, password]);

  const handleGoogleSignUp = () => {

  };
  const googleLogo: ImageSourcePropType = require('../assets/google.png');

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Title>Log In</Title>
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

        <TouchableOpacity
          style={styles.passwordIconContainer}
          onPress={togglePasswordVisibility}>
          <Image
            style={[
              styles.eye,
              secureTextEntry ? styles.desactivedEye : styles.activeEye,
            ]}
            source={require('../assets/ojo.png')}
          />
        </TouchableOpacity>
      </View>

      <ButtonPrimary title="Log In" onPress={handleSignIn} isValid={isValid} />
      <Text style={styles.textOr}>or</Text>
      <ButtonPrimary
        title="Log In With Google"
        imgSource={googleLogo}
        onPress={handleGoogleSignUp}
        isValid={true}
      />
      <Text style={styles.textLogIn}>
        Don't have an account?{' '}
        <Text
          style={styles.underline}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Sign Up
        </Text>
      </Text>
      <LoadingModal
        isLoading={isLoading}
        isRegistered={isRegistered}
        loadingTitle="Logging In"
        title={authSuccess ? 'Logged In' : 'Error'}
        success={authSuccess}
      />
    </KeyboardAvoidingView>
  );
};
