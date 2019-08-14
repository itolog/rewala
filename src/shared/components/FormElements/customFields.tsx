import TextField from '@material-ui/core/TextField';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';

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
    <>
      <TextField
        {...input}
        label={label}
        type={type}
        className={className}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <br/>
      {touched &&
      ((error && <div style={{ marginBottom: '10px', marginTop: '5' }}>{error}</div>))}
    </>
  );
};
