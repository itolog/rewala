import React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
// UI
import Button from '@material-ui/core/Button';

import { loginValidator } from '../../../shared/components/FormElements/validate';
import { CustomInput } from '../../../shared/components/FormElements/customFields';


interface Props extends InjectedFormProps{
}

const ConfirmCodeForm = (props: Props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="resetPasswordEmail"
          component={CustomInput}
          label='email'
          type="email"
        />
      </div>
      <br/>
      <Button
        type="submit"
        variant="contained"
      >
        reset password
      </Button>
    </form>
  )
};

export default reduxForm({
  form: 'resetPasswordForm',
  validate: loginValidator,
})(ConfirmCodeForm);
