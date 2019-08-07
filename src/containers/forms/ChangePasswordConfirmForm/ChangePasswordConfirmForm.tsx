import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';

import { CustomInput } from '../../../shared/components/FormElements/customFields';
import { changePasswordValidation } from '../../../shared/components/FormElements/validate';
import Button from '@material-ui/core/Button';

const ChangePasswordConfirmForm = (props: any) => {
  const { handleSubmit } = props;
  return (
     <form onSubmit={handleSubmit} className='login-form'>
       <Field
         name="newPassword"
         component={CustomInput}
         label='Password'
         type="password"
       />
       <Field
         name="confirmPassword"
         component={CustomInput}
         label='Confirm Password'
         type="password"
       />
       <Button
         variant='outlined'
               type='submit'
         // disabled={loading}
       >
         Save password
       </Button>
     </form>
  )
};

export default compose(
  reduxForm({
    form: 'changePasswordConfirmForm',
    validate: changePasswordValidation
  })
)(ChangePasswordConfirmForm as any) as any;
