import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { CustomInput } from '../../../shared/components/FormElements/customFields';
import { changePasswordValidation } from '../../../shared/components/FormElements/validate';
import Button from "@material-ui/core/Button";

interface Props {
  loading: boolean,
  onSubmit: () => void
}

const ChangePasswordForm = React.memo((props: Props) => {
  const { loading, onSubmit } = props;
  return (
    <form onSubmit={onSubmit} className='login-form'>
      <div>
        <Field
          name="oldPassword"
          component={CustomInput}
          label='Old password'
          type="password"
        />
      </div>
      <div>
        <Field
          name="newPassword"
          component={CustomInput}
          label='New password'
          type="password"
        />
      </div>
      <div>
        <Field
          name="confirmPassword"
          component={CustomInput}
          label='confirm password'
          type="password"
        />
      </div>
      <Button variant='outlined' type='submit' disabled={loading}>
        Save
      </Button>
    </form>
  )
});

export default compose(
  reduxForm({
    form: 'changePasswordForm',
    validate: changePasswordValidation,
  })
)(ChangePasswordForm as any) as any;
