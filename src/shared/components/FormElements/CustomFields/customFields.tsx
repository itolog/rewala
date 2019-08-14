import TextField from '@material-ui/core/TextField';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

import './customInput.css';

interface IProps extends WrappedFieldProps {
  label: string;
  type: string;
  className: string;
}

export const CustomInput: React.FC<IProps> = ({
                                                input,
                                                label,
                                                type,
                                                className,
                                                meta: { touched, error },
                                              }) => {
  return (
    <div className='input-wrapp'>
      <TextField
        {...input}
        label={label}
        type={type}
        error={(touched && error) ? true : false}
        className={className}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <br/>
      {touched &&
      ((error && <div className='input-error'>{error}</div>))}
    </div>
  );
};
