import React, { ReactElement } from 'react';
import styles from './custom-button.module.scss';


type ButtonProps = {
  type?: 'submit',
  children: React.ReactNode,
  isGoogleSignIn?: boolean,
  // inverted?:true|fal,
  onClick?: () => void
}

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }: ButtonProps): ReactElement => (
  <button
    className={`${isGoogleSignIn ? `${styles.google_sign_in}` : ''}  ${styles.custom_button}  `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
