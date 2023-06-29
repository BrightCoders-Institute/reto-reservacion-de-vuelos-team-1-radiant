import { ViewStyle } from 'react-native';

export interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  error: any;
  secureTextEntry: boolean;
  style?: ViewStyle;
}

export interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
  error: any;
}

export interface TitleProps {
  children: React.ReactNode;
}

export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  isValid: boolean;
}

export interface LoadingModalProps {
  isLoading: boolean;
  isRegistered: boolean;
}
