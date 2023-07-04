import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
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
import { StackScreenProps } from '@react-navigation/stack';
import styles from '../appTheme/AppTheme';
import { firstNameValidation, emailValidation, passwordValidation, agree1Validation } from '../helpers/formValidations';

interface Props extends StackScreenProps<any, any>{};

const SignUpScreen = ({ navigation }: Props) => {
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
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsValid(
      firstNameValidation(firstName, setErrorFirstName) &&
      emailValidation(email, setErrorEmail) &&
      passwordValidation(password, setErrorPassword) &&
      agree1Validation(agree1, setErrorAgree1));
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
 firstNameValidation(firstName, setErrorFirstName) &&
      emailValidation(email, setErrorEmail) &&
      passwordValidation(password, setErrorPassword) &&
      agree1Validation(agree1, setErrorAgree1);
      
      
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
      firstNameValidation(firstName, setErrorFirstName) &&
      emailValidation(email, setErrorEmail) &&
      passwordValidation(password, setErrorPassword) &&
      agree1Validation(agree1, setErrorAgree1)
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
      <LoadingModal isLoading={isLoading} isRegistered={isRegistered} loadingTitle='Signing Up...' successTitle='Signed Up Succesfully'/>
    </KeyboardAvoidingView>
  );
};


export default SignUpScreen;
