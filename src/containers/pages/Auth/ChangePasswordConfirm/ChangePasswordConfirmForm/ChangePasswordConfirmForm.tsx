import React from 'react';
import { compose } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import Button from '@material-ui/core/Button';
import { CustomInput } from '../../../../../shared/components/FormElements/customFields';
import { changePasswordValidation } from '../../../../../shared/components/FormElements/validate';

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

const ChangePasswordConfirmForm = (props: InjectedFormProps<FormData>) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <Field
        name='newPassword'
        component={CustomInput}
        label='Password'
        type='password'
      />
      <Field
        name='confirmPassword'
        component={CustomInput}
        label='Confirm Password'
        type='password'
      />
      <Button
        variant='outlined'
        type='submit'
      >
        Save password
      </Button>
    </form>
  );
};

export default compose(
  reduxForm({
    form: 'changePasswordConfirmForm',
    validate: changePasswordValidation,
  }),
)(ChangePasswordConfirmForm);
