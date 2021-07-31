import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label = null, ...formInputProps }) => (
  <div className="group">
    <input
      id={formInputProps.id}
      className="form-input"
      onChange={handleChange}
      {...formInputProps}
    />
    {label ? (
      <label
        htmlFor={formInputProps.name}
        id={formInputProps.id}
        className={`${
          formInputProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
