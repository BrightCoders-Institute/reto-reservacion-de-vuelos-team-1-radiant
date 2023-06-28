import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  TitleProps,
  InputProps,
  CheckboxProps,
  PrimaryButtonProps,
} from '../interfaces/interfaces';

import LoadingModal from './LoadingModal';

const Title = ({ children }: TitleProps) => (
  <Text style={styles.title}>{children}</Text>
);

const InputField = ({ label, value, onChangeText, error, secureTextEntry }: InputProps) => (
  <View>
    <View style={styles.inputLabelContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      {error ? (<Text style={styles.error}>{error}</Text>) : null}
    </View>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const CustomCheckbox = ({ value, onValueChange, label, error }: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onValueChange(!value);
  };

  return (
    <>
      <View style={styles.checkbox}>
        <CheckBox
          value={value}
          onValueChange={handleCheckboxChange}
          style={value ? styles.checkboxSelected : styles.checkboxUnselected}
        />
        <Text>{label}</Text>
      </View>

      {error ? (<Text style={styles.errorCheckBox}>{error}</Text>) : null}

    </>
  );
};

const PrimaryButton = ({ title, onPress, isValid }: PrimaryButtonProps) => (
  <TouchableOpacity style={[
    styles.buttonContainer, isValid ? styles.primaryButtonValid : styles.primaryButtonInvalid]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);



const SignUpForm = () => {
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
        <InputField
          label="Password *"
          value={password}
          onChangeText={text => setPassword(text)}
          error={isSubmitted && errorPassword}
          secureTextEntry={secureTextEntry}
        />
        <View style={styles.passwordIconContainer}>
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              style={styles.eye}
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
      <PrimaryButton title="Sign Up" onPress={handleSignUp} isValid={isValid} />
      <Text style={styles.textOr}>or</Text>
      <PrimaryButton title="Sign Up with Google" onPress={handleGoogleSignUp} isValid={true} />
      <View style={styles.googleIconContainer}>
        <Image style={styles.google} source={require('../assets/google.png')} />
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 26,
    color: '#2D7BDD',
    fontWeight: 'bold',
    marginRight: 272,
    marginBottom: 30,
  },
  inputContainer: {
    marginRight: 15,
    marginLeft: 14,
    marginBottom: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  inputLabelContainer: {
    flexDirection: 'row',
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 15,
    fontWeight: 'bold',
  },
  input: {
    width: 360,
    height: 47,
    fontSize: 20,
    fontWeight: 'bold',
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    paddingTop: 10,
    marginTop: 2,
    marginBottom: 10,
  },
  passwordIconContainer: {
    position: 'absolute',
    right: 15,
    top: 210,
  },
  eye: {
    width: 25,
    height: 25,
    tintColor: '#A0A0A0',
  },
  checkboxContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginRight: 105,
    marginTop: 20,
    fontSize: 14,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkboxSelected: {
    backgroundColor: 'blue',
  },
  checkboxUnselected: {
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 360,
    height: 46,
  },
  primaryButtonInvalid: {
    backgroundColor: '#A0A0A0',
  },
  primaryButtonValid: {
    backgroundColor: '#2774D5',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'System',
  },
  textOr: {
    marginTop: 7,
  },
  googleIconContainer: {
    position: 'absolute',
    top: 560,
    left: 65,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  google: {
    width: 25,
    height: 25,
  },
  textLogIn: {
    fontSize: 16,
    marginTop: 18,
  },
  underline: {
    textDecorationLine: 'underline',
    color: '#2774D5',
  },
  error: {
    color: 'red',
    fontSize: 15,
    marginLeft: 10,
    // maxWidth: 300,
  },
  errorCheckBox: {
    color: 'red',
    fontSize: 13,
    marginLeft: 10,
    width: 'auto',
  },
});

export default SignUpForm;
