import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  label, 
  onClickHandler, 
  size = 'MEDIUM', 
  type = 'PRIMARY', 
  disabled = false 
}) => {
  // Construct dynamic class names for styling
  const buttonClass = `btn btn-${type.toLowerCase()} btn-${size.toLowerCase()}`;

  return (
    <button 
      className={buttonClass} 
      onClick={onClickHandler} 
      disabled={disabled}
    >
      {label}
    </button>
  );
};

// Enforce property types and required attributes
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['SMALL', 'MEDIUM', 'LARGE']),
  type: PropTypes.oneOf(['PRIMARY', 'SECONDARY', 'TERTIARY']),
  disabled: PropTypes.bool
};

export default Button;
