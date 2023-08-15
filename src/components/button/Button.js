import React from 'react';
import './Button.css';
import { FaSignInAlt, FaShoppingCart } from 'react-icons/fa';

const Button = ({ icon, text, style, size }) => {
  return (
    <button className={`btn btn--${style} btn--${size}`}>
      {icon === 'login' && <FaSignInAlt className='btn-icon' />}
      {icon === 'product' && <FaShoppingCart className='btn-icon' />}
      <span className='btn-text'>{text}</span>
    </button>
  );
};

export default Button;
