import * as React from 'react';

interface ButtonProps {
  disabled?: boolean;
  text: string;
}

export const Button: React.SFC<ButtonProps> = ({ disabled, text }) => {
  return <button disabled={disabled}>{text}</button>;
};
