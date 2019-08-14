import Button from '@material-ui/core/Button';
import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { CustomInput } from '../../../../../shared/components/FormElements/customFields';
import { loginValidator } from '../../../../../shared/components/FormElements/validate';

interface FormData {
  resetPasswordEmail: string;
}

const ConfirmCodeForm = (props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <Field
        name='resetPasswordEmail'
        component={CustomInput}
        label='email'
      />
      <br/>
      <Button
        type='submit'
        variant='contained'
      >
        reset password
      </Button>
    </form>
  );
};

export default reduxForm({
  form: 'resetPasswordForm',
  validate: loginValidator,
})(ConfirmCodeForm);
