// UI
import Button from '@material-ui/core/Button';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { CustomInput } from '../../../shared/components/FormElements/customFields';
import { confirmCodeValidation } from '../../../shared/components/FormElements/validate';

interface FormData {
  confirmPasswordCode: string;
}

const ResetPasswordConfirmCodeForm = (props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>

      <Field
        name='confirmPasswordCode'
        component={CustomInput}
        label='Enter Code From Email'
        type='text'
      />
      <br/>
      <p>
        The verification code was send to your email.Check your email.
      </p>
      <br/>
      <Button
        type='submit'
        color='primary'
      >
        change password
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'resetPasswordConfirmCodeForm',
  validate: confirmCodeValidation,
})(ResetPasswordConfirmCodeForm);
