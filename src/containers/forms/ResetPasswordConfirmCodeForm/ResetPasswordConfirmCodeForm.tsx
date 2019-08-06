import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
// UI
import Button from '@material-ui/core/Button';

import { loginValidator } from '../../../shared/components/FormElements/validate';
import { CustomInput } from '../../../shared/components/FormElements/customFields';


interface Props extends InjectedFormProps {
}

const ResetPasswordConfirmCodeForm = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>

      <Field
        name="confirmPasswordCode"
        component={CustomInput}
        label='Enter Code From Email'
        type="text"
      />

      <br/>
      <p>
        The verification code was send to your email.Check your email.
      </p>
      <br/>
      <Button
        type="submit"
        color='primary'
      >
        change password
      </Button>
    </form>
  )
};

export default reduxForm({
  form: 'resetPasswordConfirmCodeForm',
  validate: loginValidator,
})(ResetPasswordConfirmCodeForm);
