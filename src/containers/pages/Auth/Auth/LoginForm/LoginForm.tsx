import Button from '@material-ui/core/Button';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { makeStyles } from '@material-ui/styles';
import { CustomInput } from '../../../../../shared/components/FormElements/CustomFields/customFields';
import { validator } from '../../../../../shared/components/FormElements/validate';

interface FormData {
  email: string;
  password: string;
}

const useStyles = makeStyles({
  loginForm: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    minWidth: '300px',
    maxWidth: '600px',
    minHeight: '200px',
    textAlign: 'center',
  },
});

const LoginForm: React.FC<InjectedFormProps<FormData>> = React.memo(({ handleSubmit }) => {
  const classes = useStyles();
  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>

      <Field
        name='email'
        component={CustomInput}
        label='email'
      />

      <Field
        name='password'
        component={CustomInput}
        label='password'
        type='password'
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Sign In
      </Button>
      <br/>
    </form>
  );
});

export default reduxForm({
  form: 'loginForm',
  validate: validator,
})(LoginForm);
