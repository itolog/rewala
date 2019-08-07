import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Button from '@material-ui/core/Button';

import './loginForm.css'
import { CustomInput } from '../../../shared/components/FormElements/customFields';
import { loginValidator } from '../../../shared/components/FormElements/validate';

interface FormData {
  email: string,
  password: string
}

const LoginForm = React.memo((props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>

      <Field
        name="email"
        component={CustomInput}
        label='email'
        type="email"
      />

      <Field
        name="password"
        component={CustomInput}
        label='password'
        type="password"
      />

      <Button
        type="submit"
        variant="contained" color="primary"
      >
        Sign In
      </Button>
      <br/>
    </form>
  )
});

export default reduxForm({
  form: 'loginForm',
  validate: loginValidator,
})(LoginForm)
