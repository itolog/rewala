import React from 'react';
import { compose } from 'redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import Button from '@material-ui/core/Button';
import { CustomInput } from '../../../../../../shared/components/FormElements/customFields';
import { changePasswordValidation } from '../../../../../../shared/components/FormElements/validate';

interface Props {
  loading: boolean;
}

interface FormData {
  oldPassword: string;
  newPassword: string;
}

const ChangePasswordForm = React.memo((props: InjectedFormProps<FormData, Props> & Props) => {
  const { loading, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <div>
        <Field
          name='oldPassword'
          component={CustomInput}
          label='Old password'
          type='password'
        />
      </div>
      <div>
        <Field
          name='newPassword'
          component={CustomInput}
          label='New password'
          type='password'
        />
      </div>
      <div>
        <Field
          name='confirmPassword'
          component={CustomInput}
          label='confirm password'
          type='password'
        />
      </div>
      <Button variant='outlined' type='submit' disabled={loading}>
        Save
      </Button>
    </form>
  );
});

export default compose(
  reduxForm<FormData, Props>({
    form: 'changePasswordForm',
    validate: changePasswordValidation,
  }),
)(ChangePasswordForm);
