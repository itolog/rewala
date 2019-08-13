import Button from '@material-ui/core/Button';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { CustomInput } from '../../../shared/components/FormElements/customFields';
import { loginValidator } from '../../../shared/components/FormElements/validate';
import './loginForm.css';

interface FormData {
  email: string;
  password: string;
}

const LoginForm = React.memo((props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>

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
  validate: loginValidator,
})(LoginForm);
