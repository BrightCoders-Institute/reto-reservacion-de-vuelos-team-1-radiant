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

export interface ButtonProps {
  title: string;
  onPress?: () => void;
  isValid?: boolean;
  imgSource?: any;
}

export interface LoadingModalProps {
  isLoading: boolean;
  isRegistered: boolean;
  loadingTitle: string;
  successTitle: string;
}

// export interface OriginDropDownProps {
//   selectedCity: string;
//   onCitySelect: (city: string) => void;
//   style?: ViewStyle;
// }

export interface SubTitleProps {
  text: string;
}