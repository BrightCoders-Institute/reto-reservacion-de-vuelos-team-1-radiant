import React, {useState} from 'react';
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

const Title = ({children}: TitleProps) => (
  <Text style={styles.title}>{children}</Text>
);

const InputField = ({label, value, onChangeText}: InputProps) => (
  <View>
    <Text style={styles.inputLabel}>{label}</Text>
    <TextInput value={value} onChangeText={onChangeText} style={styles.input} />
  </View>
);

const CustomCheckbox = ({value, onValueChange, label}: CheckboxProps) => {
  const handleCheckboxChange = () => {
    onValueChange(!value);
  };

  return (
    <View style={styles.checkbox}>
      <CheckBox
        value={value}
        onValueChange={handleCheckboxChange}
        style={value ? styles.checkboxSelected : styles.checkboxUnselected}
      />
      <Text>{label}</Text>
    </View>
  );
};

const PrimaryButton = ({title, onPress}: PrimaryButtonProps) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);
const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const handleSignUp = () => {
    // Lógica para realizar el registro
  };

  const handleGoogleSignUp = () => {
    // Lógica para realizar el registro con Google
  };

  return (
    <View style={styles.container}>
      <Title>Sign Up</Title>
      <View style={styles.inputContainer}>
        <InputField
          label="First Name"
          value={firstName}
          onChangeText={text => setFirstName(text)}
        />
        <InputField
          label="Email *"
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <InputField
          label="Password *"
          //secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.passwordIconContainer}>
          <Image style={styles.eye} source={require('../assets/ojo.png')} />
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
        />
        <CustomCheckbox
          value={agree2}
          onValueChange={value => setAgree2(value)}
          label="Suscribe for select product updates"
        />
      </View>
      <PrimaryButton title="Sign Up" onPress={handleSignUp} />
      <Text style={styles.textOr}>or</Text>
      <PrimaryButton title="Sign Up with Google" onPress={handleGoogleSignUp} />
      <View style={styles.googleIconContainer}>
        <Image style={styles.google} source={require('../assets/google.png')} />
      </View>
      <View>
        <Text style={styles.textLogIn}>
          Already have an account? <Text style={styles.underline}>Log in</Text>
        </Text>
      </View>
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
    alignItems: 'flex-start', // Cambia a 'flex-start' para alinear los elementos a la izquierda
    justifyContent: 'flex-start',
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
    //tintColor: '#2774D5',
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
    //backgroundColor: '#2774D5',
    backgroundColor: '#A0A0A0',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 360,
    height: 46,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
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
});

export default SignUpForm;
