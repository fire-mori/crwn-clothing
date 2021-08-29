import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
  children, inverted, isGoogleSignIn, ...buttonProps
}) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`} {...buttonProps}>
    {children}
  </button>
);

export default CustomButton;
