import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';

import { CustomInput } from '../../../shared/components/FormElements/customFields';
import { changePasswordValidation } from '../../../shared/components/FormElements/validate';
import Button from '@material-ui/core/Button';

interface FormData {
  newPassword: string,
  confirmPassword: string
}

interface FormProps {
  loading: boolean | undefined
};


const ChangePasswordConfirmForm = (props: InjectedFormProps<FormData, FormProps, string> & FormProps) => {
  const { handleSubmit, loading } = props;
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
         Save password {loading}
       </Button>
     </form>
  )
};

export default compose(
  reduxForm<FormData, FormProps>({
    form: 'changePasswordConfirmForm',
    validate: changePasswordValidation
  })
)(ChangePasswordConfirmForm);
