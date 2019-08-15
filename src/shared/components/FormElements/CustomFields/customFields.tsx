import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { WrappedFieldProps } from 'redux-form';
import { colors } from '../../../variebles/colors';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
  },
  error: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: colors.errorInput,
  },
});

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        {...input}
        label={label}
        type={type}
        error={!!(touched && error)}
        className={className}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      <br/>
      {touched &&
      ((error && <div className={classes.error}>{error}</div>))}
    </div>
  );
};
