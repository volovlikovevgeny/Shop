import React, { ReactElement } from 'react';
import styles from './custom-button.module.scss';


type ButtonProps = {
  type?: 'submit',
  children: React.ReactNode,
  isGoogleSignIn?: boolean,
  inverted?: string,
  onClick?: () => void
}

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: ButtonProps): ReactElement => {
  return (
    <button
      className={`${inverted ? styles.inverted : ''} ${isGoogleSignIn ? styles.googlesignin : ''
        } ${styles.custom_button}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
