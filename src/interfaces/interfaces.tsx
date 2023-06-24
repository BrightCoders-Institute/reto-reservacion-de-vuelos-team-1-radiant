export interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
}

export interface CheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  label: string;
}

export interface TitleProps {
  children: React.ReactNode;
}

export interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
}
