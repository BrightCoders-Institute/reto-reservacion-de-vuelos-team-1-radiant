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
  disabled?: boolean;

}

export interface LoadingModalProps {
  isLoading: boolean;
  isRegistered: boolean;
  loadingTitle: string;
  title: string;
  success: boolean;
}

export interface SubTitleProps {
  text: string;
}

export interface bookingCardProps {
  selectedFlightOrigin: string;
  selectedFlightDestination: string;
  date: string;
  passengers: number;
  isOnMyFLights?: boolean;
}

export interface SelectFlightsProps {
  onSelectFlight: (flight: any) => void
}
export interface FlightProps {
  selectedFlight: any;
  alignRight?: boolean;
}

export interface CalendarComponentProps {
  onDateSelect: (date: string) => void;
}

export interface SelectPassengerProps {
  onSelectPassengers: (index: number) => void;
}

export interface bookingData {
  id: string;
  origin: string;
  destination: string;
  date: string;
  passengers: number;
}
